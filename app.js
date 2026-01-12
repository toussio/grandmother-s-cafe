// /assets/js/app.js
import {
  db,
  clientId,
  ADMIN_CODE,
  requestAdminAccess,
  writeAdminLog,
  watchAdminAllowed,
  watchMaidReservations,
  watchFoodOrders,
  createMaidReservation,
  createFoodOrder,
  clearAllCollections
} from "./firebase.js";

/* =========================
   STATE
========================= */
let isDark = false;
let isAllowed = false;   // Firestore adminAccess.allowed
let isAdmin = false;     // 코드 입력 후 ON

let maidReservations = [];
let foodOrders = [];
let cart = [];

/* =========================
   DOM HELPERS
========================= */
const $ = (id) => document.getElementById(id);

/* =========================
   THEME
========================= */
function toggleTheme(){
  isDark = !isDark;
  if(isDark){
    document.documentElement.setAttribute("data-theme","dark");
    $("themeIcon").textContent = "☀️";
    $("themeText").textContent = "라이트 모드";
  }else{
    document.documentElement.removeAttribute("data-theme");
    $("themeIcon").textContent = "🌙";
    $("themeText").textContent = "다크 모드";
  }
}

/* =========================
   VIEW
========================= */
function setView(view){
  if(view === "admin" && !isAdmin){
    alert("관리자 ON 상태에서만 접근 가능합니다.");
    return;
  }

  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const target = document.getElementById(`view-${view}`);
  if(target) target.classList.add("active");

  document.querySelectorAll(".tab-btn")
    .forEach(b => b.classList.toggle("active", b.dataset.view === view));

  location.hash = view;
  window.scrollTo({ top:0, behavior:"smooth" });

  if(view === "status") renderStatus();
}

/* =========================
   ADMIN PANEL
========================= */
function toggleAdminPanel(){
  const panel = $("adminPanel");
  if(!panel) return;
  panel.classList.toggle("open");
  if(panel.classList.contains("open")){
    $("clientIdView").value = clientId;
  }
}

async function adminLoginFromUI(){
  if(!isAllowed){
    alert("관리자 권한이 없습니다.");
    return;
  }
  const code = ($("adminCodeInput")?.value || "").trim();
  $("adminCodeInput").value = "";

  await writeAdminLog("code_attempt", { ok: code === ADMIN_CODE });

  if(code !== ADMIN_CODE){
    alert("관리자 코드가 올바르지 않습니다.");
    return;
  }

  isAdmin = true;
  updateAdminUI();
  alert("관리자 모드 ON");
}

async function adminLogoutFromUI(){
  if(isAdmin){
    await writeAdminLog("logout");
  }
  isAdmin = false;
  updateAdminUI();
}

function updateAdminUI(){
  const state = $("adminStateText");
  const dot = $("adminDot");
  const tab = $("adminTab");

  if(isAdmin){
    state.textContent = "ADMIN ON";
    dot.classList.add("on");
    tab.style.display = "";
  }else if(isAllowed){
    state.textContent = "CODE READY";
    dot.classList.remove("on");
    tab.style.display = "none";
  }else{
    state.textContent = "LOCK";
    dot.classList.remove("on");
    tab.style.display = "none";
  }

  $("adminLockedBox").style.display = isAllowed ? "none" : "";
  $("adminUnlockedBox").style.display = isAllowed ? "" : "none";
}

/* =========================
   MAID
========================= */
function resetMaidForm(){
  $("maidName").value = "";
  $("maidDate").value = "";
  $("maidTime").value = "";
  $("maidRid").value = "";
  $("maidUser").value = "";
  $("maidPeople").value = "";
  $("maidDiscord").value = "";
}

async function submitMaid(){
  const maid = $("maidName").value.trim();
  const date = $("maidDate").value;
  const time = $("maidTime").value;
  const rid = $("maidRid").value.trim();
  const name = $("maidUser").value.trim();
  const discord = $("maidDiscord").value.trim();
  const people = parseInt($("maidPeople").value, 10);

  if(!maid || !date || !time || !rid || !name || !discord || !people){
    alert("모든 항목을 입력해주세요.");
    return;
  }

  await createMaidReservation({
    maid, date, time, rid, name, discord, people
  });

  alert("메이드 예약 완료");
  resetMaidForm();
  setView("status");
}

/* =========================
   FOOD / CART
========================= */
const FOOD = {
  americano: { name:"아메리카노", price:100 },
  strawberry:{ name:"딸바 스무디", price:200 },
  toast:     { name:"전남친 토스트", price:100 },
  pet_water: { name:"펫 워터", price:100 },
  pet_mineral:{ name:"펫 미네랄 워터", price:200 },
  cat_churu: { name:"캣츄르", price:100 }
};

function addToCart(){
  const key = $("foodMenu").value;
  const qty = parseInt($("foodQty").value,10);
  if(qty < 100){ alert("최소 100개"); return; }

  const item = FOOD[key];
  if(!item){ alert("메뉴 선택"); return; }

  const found = cart.find(i => i.key === key);
  if(found) found.qty += qty;
  else cart.push({ key, ...item, qty });

  renderCart();
}

function removeFromCart(key){
  cart = cart.filter(i => i.key !== key);
  renderCart();
}

function clearCart(){
  cart = [];
  renderCart();
}

function renderCart(){
  const list = $("cartList");
  const totalEl = $("cartTotal");
  list.innerHTML = "";

  let total = 0;
  cart.forEach(i=>{
    const sum = i.qty * i.price;
    total += sum;

    const li = document.createElement("li");
    li.innerHTML = `
      <div>${i.name} × ${i.qty}</div>
      <div>${(sum/10000).toFixed(1)}억
        <button onclick="removeFromCart('${i.key}')">삭제</button>
      </div>`;
    list.appendChild(li);
  });

  totalEl.textContent = (total/10000).toFixed(1);
}

async function confirmFoodOrder(){
  if(cart.length === 0){ alert("장바구니 비어있음"); return; }

  const rid = $("foodRid").value.trim();
  const name = $("foodUser").value.trim();
  const discord = $("foodDiscord").value.trim();

  if(!rid || !name || !discord){
    alert("정보 입력");
    return;
  }

  let total = 0;
  cart.forEach(i => total += i.qty * i.price);

  await createFoodOrder({
    rid, name, discord,
    items: cart,
    totalManwon: total
  });

  alert("주문 완료");
  clearCart();
  setView("status");
}

/* =========================
   STATUS
========================= */
function fmtTime(d){
  return d.toLocaleString();
}

function renderStatus(){
  $("kpiMaid").textContent = maidReservations.length;
  $("kpiFood").textContent = foodOrders.length;

  $("maidStatusBody").innerHTML = maidReservations.map(r => `
    <tr>
      <td>${fmtTime(r.ts)}</td>
      <td>${r.rid}</td>
      <td>${r.name}</td>
      <td>${r.discord}</td>
      <td>${r.people}</td>
    </tr>
  `).join("");

  $("foodStatusBody").innerHTML = foodOrders.map(o => `
    <tr>
      <td>${fmtTime(o.ts)}</td>
      <td>${o.rid}</td>
      <td>${o.name}</td>
      <td>${(o.totalManwon/10000).toFixed(1)}억</td>
    </tr>
  `).join("");
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {
  // tab click
  document.querySelectorAll(".tab-btn")
    .forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));

  // firestore watchers
  watchMaidReservations(rows => {
    maidReservations = rows;
    renderStatus();
  });

  watchFoodOrders(rows => {
    foodOrders = rows;
    renderStatus();
  });

  watchAdminAllowed(allowed => {
    isAllowed = allowed;
    if(!allowed) isAdmin = false;
    updateAdminUI();
  });

  // initial view
  const initial = (location.hash || "#home").replace("#","");
  setView(initial);
});

/* =========================
   GLOBAL (inline onclick)
========================= */
window.setView = setView;
window.toggleTheme = toggleTheme;
window.toggleAdminPanel = toggleAdminPanel;
window.adminLoginFromUI = adminLoginFromUI;
window.adminLogoutFromUI = adminLogoutFromUI;
window.requestAdminAccess = requestAdminAccess;

window.resetMaidForm = resetMaidForm;
window.submitMaid = submitMaid;

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.confirmFoodOrder = confirmFoodOrder;

window.clearAllStatus = async () => {
  if(!isAdmin){ alert("관리자만 가능"); return; }
  await clearAllCollections();
  alert("전체 삭제 완료");
};
