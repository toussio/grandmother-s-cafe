/* =========================
   THEME TOKENS (Light default)
========================= */
:root{
  --bg:#ffffff;
  --bg-tint:#fff7fa;
  --surface:#ffffff;
  --text:#0f172a;
  --muted:#64748b;
  --line:#e6edf5;

  --pink:#f4b6c6;
  --pink-weak:#fff1f5;
  --pink-strong:#ff6fa3;

  --r:16px;
  --topbar-h:78px;
  --sidebar-w:280px;

  --shadow:0 12px 30px rgba(15, 23, 42, .06);
  --shadow-soft:0 6px 18px rgba(15, 23, 42, .06);

  --topbar-bg: rgba(255,255,255,.82);
  --sidebar-bg: rgba(255,255,255,.90);
}

/* =========================
   DARK THEME OVERRIDES
========================= */
:root[data-theme="dark"]{
  --bg:#0b0f17;
  --bg-tint:#0b0f17;
  --surface:#0f1623;
  --text:#e7eefc;
  --muted:#9aa7bf;
  --line: rgba(148, 163, 184, .18);

  --pink:#ff86b2;
  --pink-weak: rgba(255, 134, 178, .10);
  --pink-strong:#ff4f98;

  --shadow:0 16px 36px rgba(0,0,0,.35);
  --shadow-soft:0 10px 22px rgba(0,0,0,.28);

  --topbar-bg: rgba(15, 22, 35, .78);
  --sidebar-bg: rgba(15, 22, 35, .82);
}

*{box-sizing:border-box;font-family:"Pretendard",system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}
body{
  margin:0;
  background:linear-gradient(180deg,var(--bg-tint), var(--bg));
  color:var(--text);
  transition: background .2s ease, color .2s ease;
}

/* ===== Topbar ===== */
.topbar{
  position:fixed; inset:0 0 auto 0;
  height:var(--topbar-h);
  background:var(--topbar-bg);
  backdrop-filter: blur(10px);
  border-bottom:1px solid var(--line);
  z-index:50;
  box-shadow:0 10px 20px rgba(0,0,0,.08);
}
.topbar-inner{
  height:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 18px;
}

/* 로고 */
.brand{display:flex;align-items:center;min-width:140px;}
.brand a{display:flex;align-items:center;text-decoration:none;}
.brand img{
  height:34px;width:auto;object-fit:contain;display:block;
  filter: drop-shadow(0 6px 12px rgba(0,0,0,.10));
}

/* 오른쪽 영역 */
.top-actions{display:flex;align-items:center;gap:10px;}

/* 탭 */
.nav{
  display:flex; gap:8px; align-items:center;
  padding:8px;
  border:1px solid var(--line);
  border-radius:999px;
  background:var(--surface);
  box-shadow:0 6px 14px rgba(0,0,0,.05);
}
.nav button{
  border:1px solid transparent;
  background:transparent;
  color:var(--muted);
  font-weight:950;
  font-size:14px;
  padding:10px 14px;
  border-radius:999px;
  cursor:pointer;
}
.nav button.active{
  color:#fff;
  background:linear-gradient(135deg, var(--pink-strong), var(--pink));
  box-shadow:0 8px 18px rgba(255, 111, 163, .25);
}

/* 테마 토글 */
.theme-btn{
  height:44px;
  padding:0 12px;
  border-radius:999px;
  border:1px solid var(--line);
  background:var(--surface);
  color:var(--text);
  font-weight:950;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:8px;
  box-shadow:0 6px 14px rgba(0,0,0,.05);
}
.theme-icon{
  width:26px;height:26px;border-radius:999px;
  display:grid;place-items:center;
  background:var(--pink-weak);
  border:1px solid rgba(255, 134, 178, .35);
  color:var(--pink-strong);
  font-size:14px;
}

/* ===== Sidebar ===== */
.sidebar{
  position:fixed;
  top:var(--topbar-h); left:0; bottom:0;
  width:var(--sidebar-w);
  background:var(--sidebar-bg);
  backdrop-filter: blur(10px);
  border-right:1px solid var(--line);
  padding:14px;
  overflow:auto;
}
.side-card{
  border:1px solid var(--line);
  border-radius:var(--r);
  background:var(--surface);
  padding:14px;
  margin-bottom:14px;
  box-shadow:var(--shadow-soft);
}
.side-title{font-size:13px;font-weight:950;margin-bottom:10px;}
.side-text{color:var(--muted);font-size:13px;line-height:1.55;}
.side-list{
  margin:0;
  padding-left:16px;
  color:var(--muted);
  font-size:13px;
  line-height:1.6;
}
.side-card.tip{
  background:var(--pink-weak);
  border-color:rgba(255, 134, 178, .35);
}

/* ===== Main ===== */
.main{
  margin-top:var(--topbar-h);
  margin-left:var(--sidebar-w);
  padding:28px 18px;
  display:flex;
  justify-content:center;
}
.content{width:100%;max-width: 1020px;}

/* ===== Typography ===== */
.page-title{margin:0;font-size:22px;font-weight:950;letter-spacing:-.02em;}
.page-sub{margin-top:8px;color:var(--muted);font-size:14px;}

/* ===== Cards / Forms ===== */
.grid{
  margin-top:18px;
  display:grid;
  grid-template-columns:1fr;
  gap:14px;
}
.card{
  background:var(--surface);
  border:1px solid var(--line);
  border-radius:20px;
  padding:18px;
  box-shadow:var(--shadow);
}
.card-title{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:14px;
}
.card-title strong{font-size:15px;font-weight:950;}
.badge{
  font-size:12px;
  padding:6px 10px;
  border-radius:999px;
  background:linear-gradient(135deg, var(--surface), var(--pink-weak));
  border:1px solid rgba(255, 134, 178, .35);
  color:var(--pink-strong);
  font-weight:950;
}

.field{margin-bottom:12px;}
label{display:block;font-size:12px;color:var(--muted);margin-bottom:6px;}
input, select{
  width:100%;
  padding:12px 12px;
  border-radius:14px;
  border:1px solid var(--line);
  background:var(--surface);
  color:var(--text);
  font-size:14px;
  outline:none;
  transition:.15s ease;
}
input::placeholder{color:rgba(148,163,184,.85);}
input:focus, select:focus{
  border-color:rgba(255,111,163,.55);
  box-shadow:0 0 0 4px rgba(244,182,198,.22);
}
.row{display:grid;grid-template-columns:1fr 1fr;gap:10px;}
.note{margin-top:10px;font-size:12px;color:var(--muted);}

/* view toggle */
.view{display:none;}
.view.active{display:block;}

/* buttons */
.actions{
  margin-top:14px;
  display:flex;
  gap:10px;
}
.btn{
  flex:1;
  padding:13px 14px;
  border-radius:16px;
  font-weight:950;
  font-size:14px;
  cursor:pointer;
  border:1px solid var(--line);
  background:var(--surface);
  color:var(--text);
  transition:.15s ease;
}
.btn.ghost:hover{filter:brightness(1.02);transform: translateY(-1px);}
.btn.primary{
  border-color:transparent;
  color:#fff;
  background:linear-gradient(135deg, var(--pink-strong), var(--pink));
  box-shadow:0 14px 26px rgba(255,111,163,.25);
}
.btn.primary:hover{filter:brightness(.98);transform: translateY(-1px);}
.btn.small{
  flex:0 0 auto;
  padding:10px 12px;
  border-radius:14px;
  font-size:13px;
}

/* ===== Food layout (left + cart) ===== */
.food-layout{
  margin-top:18px;
  display:grid;
  grid-template-columns: 1fr 380px;
  gap:14px;
}
.cart-list{list-style:none;padding:0;margin:0;font-size:14px;}
.cart-list li{
  padding:10px 0;
  border-bottom:1px dashed var(--line);
  display:flex;
  justify-content:space-between;
  gap:10px;
}
.cart-meta{display:flex;flex-direction:column;gap:4px;}
.cart-meta .muted{color:var(--muted);font-size:12px;}
.cart-total{
  margin-top:12px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-weight:950;
}
.cart-actions{margin-top:12px;display:flex;gap:10px;}

/* ===== Status ===== */
.kpi-grid{
  margin-top:18px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:14px;
}
.kpi{
  border:1px solid var(--line);
  border-radius:18px;
  background:var(--surface);
  padding:14px;
  box-shadow:var(--shadow-soft);
}
.kpi .label{color:var(--muted); font-size:12px;}
.kpi .value{margin-top:8px; font-size:22px; font-weight:950;}

.table-wrap{
  margin-top:14px;
  border:1px solid var(--line);
  border-radius:16px;
  overflow:auto;
  background:var(--surface);
}
table{
  width:100%;
  border-collapse:separate;
  border-spacing:0;
  min-width:900px;
}
th, td{
  padding:12px 12px;
  border-bottom:1px solid var(--line);
  text-align:left;
  font-size:13px;
}
th{
  position:sticky;
  top:0;
  background:var(--surface);
  font-weight:950;
}
td .pill{
  display:inline-block;
  padding:4px 8px;
  border-radius:999px;
  border:1px solid rgba(255, 134, 178, .35);
  background:var(--pink-weak);
  color:var(--pink-strong);
  font-weight:900;
  font-size:12px;
}
.status-controls{
  margin-top:14px;
  display:flex;
  gap:10px;
  align-items:center;
}
.status-controls input{max-width:360px;}
.muted-small{color:var(--muted); font-size:12px;}

/* ===== HOME (Main) ===== */
.home-hero{
  margin-top:18px;
  display:grid;
  grid-template-columns: 3fr 1fr;
  gap:14px;
  min-height: 640px;
}
.hero-media{
  position:relative;
  border-radius:22px;
  overflow:hidden;
  border:1px solid var(--line);
  background:var(--surface);
  box-shadow:var(--shadow);

  height: 68vh;
  min-height: 640px;
  max-height: 820px;
}
.hero-media::after{
  content:"";
  position:absolute; inset:0;
  background:
    radial-gradient(1200px 600px at 20% 30%, rgba(255,111,163,.20), transparent 60%),
    linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.38));
  pointer-events:none;
}
.slide{
  position:absolute; inset:0;
  background-size:cover;
  background-position:center;
  opacity:0;
  transform: scale(1.08);
  transition: opacity 1.8s ease, transform 12s ease;
}
.slide.active{
  opacity:1;
  transform: scale(1.14);
}
.hero-badge{
  position:absolute;
  left:16px; top:16px;
  z-index:2;
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 12px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.22);
  background: rgba(0,0,0,.25);
  color:#fff;
  font-weight:950;
  font-size:12px;
  backdrop-filter: blur(10px);
}
.hero-copy{
  border-radius:22px;
  border:1px solid var(--line);
  background:var(--surface);
  box-shadow:var(--shadow);
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:14px;
}
.hero-title{
  margin:0;
  font-size:28px;
  font-weight:1000;
  letter-spacing:-.03em;
  line-height:1.15;
  background: linear-gradient(135deg, var(--pink-strong), var(--text));
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
.hero-desc{
  margin:10px 0 0 0;
  color:var(--muted);
  font-size:14px;
  line-height:1.65;
}
.hero-actions{
  display:flex;
  gap:10px;
  margin-top:14px;
}

/* ===== Floating Admin Login (bottom-right) ===== */
.admin-fab{
  position:fixed;
  right:18px;
  bottom:18px;
  z-index:200;
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:10px;
}
.admin-panel{
  width: 360px;
  border:1px solid var(--line);
  border-radius:18px;
  background:var(--surface);
  box-shadow:var(--shadow);
  overflow:hidden;
  transform: translateY(8px);
  opacity:0;
  pointer-events:none;
  transition:.18s ease;
}
.admin-panel.open{
  transform: translateY(0);
  opacity:1;
  pointer-events:auto;
}
.admin-panel-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:12px 12px;
  border-bottom:1px solid var(--line);
  background:linear-gradient(135deg, var(--pink-weak), var(--surface));
}
.admin-panel-head strong{font-size:13px;font-weight:950;}
.admin-state{
  font-size:12px;
  font-weight:950;
  color:var(--pink-strong);
}
.admin-panel-body{padding:12px;}
.admin-row{display:flex;gap:8px;align-items:center;}
.admin-mini{
  margin-top:10px;
  font-size:12px;
  color:var(--muted);
  line-height:1.5;
}
.admin-toggle-btn{
  height:48px;
  min-width:48px;
  padding:0 14px;
  border-radius:999px;
  border:1px solid var(--line);
  background:var(--surface);
  color:var(--text);
  font-weight:950;
  cursor:pointer;
  display:flex;
  align-items:center;
  gap:8px;
  box-shadow:0 10px 22px rgba(0,0,0,.08);
}
.admin-dot{
  width:10px;height:10px;border-radius:999px;
  background:rgba(148,163,184,.7);
}
.admin-dot.on{ background: var(--pink-strong); }

/* responsive */
@media (max-width: 980px){
  .food-layout{grid-template-columns:1fr;}
  .kpi-grid{grid-template-columns:1fr;}
  .home-hero{grid-template-columns:1fr; min-height:auto;}
  .hero-media{
    height:auto;
    min-height:480px;
    max-height:none;
  }
  .hero-title{font-size:24px;}
}
@media (max-width: 820px){
  .sidebar{display:none;}
  .main{margin-left:0;padding:22px 14px;}
  .content{max-width:100%;}
  .row{grid-template-columns:1fr;}
  .brand{min-width:auto;}
  .top-actions{gap:8px;}
  .theme-btn{height:42px;}
  .admin-panel{width:min(92vw, 380px);}
}
