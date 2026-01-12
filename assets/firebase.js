// /assets/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  limit,
  serverTimestamp,
  writeBatch
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

/* =========================
   FIREBASE INIT
========================= */
const firebaseConfig = {
  apiKey: "AIzaSyCfMWVHgewbojxk4L-4A_oz8CtUfCUsZGE",
  authDomain: "cafe-985f1.firebaseapp.com",
  projectId: "cafe-985f1",
  storageBucket: "cafe-985f1.firebasestorage.app",
  messagingSenderId: "133444445516",
  appId: "1:133444445516:web:1bebdebd6d26928fd15be9",
  measurementId: "G-1K7L92P1CR"
};

const app = initializeApp(firebaseConfig);
try { getAnalytics(app); } catch (e) {}
export const db = getFirestore(app);

/* =========================
   CLIENT ID (local)
========================= */
export const clientId = (() => {
  const key = "rw_client_id";
  let v = localStorage.getItem(key);
  if(!v){
    v = "c_" + Math.random().toString(36).slice(2,10) + "_" + Date.now().toString(36);
    localStorage.setItem(key, v);
  }
  return v;
})();

/* =========================
   ADMIN
========================= */
export const ADMIN_CODE = "RW-ADMIN-0000"; // ✅ 관리자 코드(단일)

/** 관리자 로그 남기기 */
export async function writeAdminLog(type, extra = {}){
  await addDoc(collection(db, "adminLogs"), {
    type,
    clientId,
    path: location.pathname,
    href: location.href,
    ua: navigator.userAgent,
    createdAt: serverTimestamp(),
    ...extra
  });
}

/** 관리자 권한 요청: adminAccess/{clientId} 생성/갱신 */
export async function requestAdminAccess(){
  await writeAdminLog("request_access");

  await setDoc(doc(db, "adminAccess", clientId), {
    clientId,
    allowed: false,
    requestedAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  }, { merge: true });
}

/** 관리자 allowed 감시 */
export function watchAdminAllowed(onChange){
  return onSnapshot(doc(db, "adminAccess", clientId), (snap) => {
    const allowed = snap.exists() ? !!snap.data().allowed : false;
    onChange(allowed);
  });
}

/* =========================
   RESERVATION WATCHERS
========================= */
export function watchMaidReservations(onChange){
  const qy = query(collection(db, "maidReservations"), orderBy("ts","desc"), limit(500));
  return onSnapshot(qy, (snap) => {
    const rows = snap.docs.map(d => {
      const v = d.data();
      return { id: d.id, ...v, ts: v.ts?.toDate ? v.ts.toDate() : new Date() };
    });
    onChange(rows);
  });
}

export function watchFoodOrders(onChange){
  const qy = query(collection(db, "foodOrders"), orderBy("ts","desc"), limit(500));
  return onSnapshot(qy, (snap) => {
    const rows = snap.docs.map(d => {
      const v = d.data();
      return { id: d.id, ...v, ts: v.ts?.toDate ? v.ts.toDate() : new Date() };
    });
    onChange(rows);
  });
}

/* =========================
   CREATE
========================= */
export async function createMaidReservation(payload){
  await addDoc(collection(db, "maidReservations"), {
    ...payload,
    ts: serverTimestamp()
  });
}

export async function createFoodOrder(payload){
  await addDoc(collection(db, "foodOrders"), {
    ...payload,
    ts: serverTimestamp()
  });
}

/* =========================
   CLEAR ALL (admin only)
   - 최대 500개 범위 삭제
========================= */
export async function clearAllCollections(){
  const batch = writeBatch(db);

  const maidSnap = await getDocs(query(collection(db, "maidReservations"), limit(500)));
  maidSnap.forEach(d => batch.delete(d.ref));

  const foodSnap = await getDocs(query(collection(db, "foodOrders"), limit(500)));
  foodSnap.forEach(d => batch.delete(d.ref));

  await batch.commit();
}
