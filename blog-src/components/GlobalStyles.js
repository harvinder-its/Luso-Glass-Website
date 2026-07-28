const CSS = `
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#f4f6f9;color:#081b33;font-family:"Montserrat",system-ui,sans-serif;-webkit-font-smoothing:antialiased}
a{color:#1874c0;text-decoration:none}
a:hover{color:#081b33}
h1,h2,h3,h4{margin:0;font-weight:700;letter-spacing:-.02em;line-height:1.06}
p{margin:0}
::selection{background:#1874c0;color:#fff}
@keyframes rise{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
.rise{opacity:0;animation:rise .9s cubic-bezier(.2,.7,.2,1) forwards}
.d1{animation-delay:.05s}.d2{animation-delay:.15s}.d3{animation-delay:.25s}.d4{animation-delay:.35s}
image-slot{--is-empty-bg:#dbe3ec}
.grid{display:grid}
.g2{grid-template-columns:repeat(2,minmax(0,1fr))}
.g3{grid-template-columns:repeat(3,minmax(0,1fr))}
.g4{grid-template-columns:repeat(4,minmax(0,1fr))}
.gfoot{grid-template-columns:1.7fr 1fr 1fr 1.3fr}
.grid>*{min-width:0}
.eyebrow{font-size:12px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:#1874c0}
.navdrop{position:relative}
.navdrop .submenu{position:absolute;top:calc(100% + 14px);left:-14px;min-width:288px;background:#0d3b66;border-radius:8px;box-shadow:0 24px 48px rgba(8,27,51,.35);padding:6px 0;opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .2s,transform .2s,visibility .2s;z-index:60}
.navdrop:hover .submenu{opacity:1;visibility:visible;transform:none}
.submenu a{display:block;padding:13px 22px;color:#dbe7f3;font-size:13.5px;font-weight:600;border-bottom:1px solid rgba(255,255,255,.09)}
.submenu a:last-child{border-bottom:0}
.submenu a:hover{background:rgba(255,255,255,.09);color:#fff}
.navdrop{position:static}
.navdrop .submenu{position:absolute;top:100%;left:50%;transform:translateX(-50%) translateY(8px);min-width:600px;background:#fff;border:1px solid #e4eaf1;border-radius:12px;box-shadow:0 30px 64px rgba(8,27,51,.18);padding:0;opacity:0;visibility:hidden;transition:opacity .22s,transform .22s,visibility .22s;z-index:60;overflow:hidden}
.navdrop:hover .submenu{opacity:1;visibility:visible;transform:translateX(-50%)}
.mega3{display:grid;grid-template-columns:1fr 1fr .92fr}
.megaSolo{display:grid;grid-template-columns:1.55fr .95fr}
.msol-main{padding:22px 16px}
.msol-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px}
.megacol{padding:22px 14px}
.megacol + .megacol{border-left:1px solid rgba(255,255,255,.08)}
.mega-h{display:flex;align-items:center;gap:8px;color:#1874c0;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;padding:0 12px;margin-bottom:8px}
.submenu a.megaitem{display:flex;gap:12px;align-items:flex-start;padding:10px 12px;border:0;border-radius:8px}
.submenu a.megaitem:hover{background:#eef4fb}
.megaitem .mi-ic{flex:none;width:36px;height:36px;border-radius:9px;background:#eaf2fb;border:1px solid #d8e6f5;display:flex;align-items:center;justify-content:center;color:#1874c0}
.megaitem .mi-tx{display:flex;flex-direction:column}
.megaitem .mi-t{color:#0d2340;font-weight:700;font-size:13.5px;line-height:1.2}
.megaitem .mi-d{display:none}
.megaitem .mi-tx{justify-content:center}
.submenu a.mega-all{display:block;border:0;margin:10px 12px 0;padding:12px 0 0;color:#1874c0;font-size:12.5px;font-weight:700;border-top:1px solid #e4eaf1}
.submenu a.mega-all:hover{color:#081b33;background:transparent}
.megapromo{background:linear-gradient(180deg,rgba(8,27,51,.72),rgba(8,27,51,.85)),url('/assets/glass-partition.webp') center/cover;padding:26px 24px;display:flex;flex-direction:column;justify-content:center}
.megapromo-res{background:linear-gradient(180deg,rgba(8,27,51,.72),rgba(8,27,51,.85)),url('/assets/residential-promo.webp') center/cover !important}
.megapromo .mp-t{color:#fff;font-size:18px;font-weight:700;line-height:1.15}
.megapromo .mp-p{color:#c3cfdf;font-size:12.5px;line-height:1.5;margin-top:9px}
.submenu .megapromo a.mp-btn{display:block;text-align:center;margin-top:16px;background:#1874c0;color:#fff;font-weight:700;font-size:13px;padding:12px;border-radius:6px;border:0}
.submenu .megapromo a.mp-btn:hover{background:#3a90d8}
.desk-nav > a,.desk-nav .navdrop > a{transition:color .2s}
.mobile-menu-btn{display:none;background:none;border:0;padding:8px;cursor:pointer;color:#0d2340;align-items:center;justify-content:center}
.mobile-nav{display:none;position:fixed;inset:0;z-index:50;background:#fff;overflow-y:auto}
.mobile-nav.open{display:block}
.mobile-nav a{color:#0d2340}
body.menu-open{overflow:hidden}
.desk-nav > a:hover,.desk-nav .navdrop > a:hover{color:#1874c0 !important}
a[data-btn]{transition:background .2s,box-shadow .2s,transform .2s,border-color .2s,color .2s}
a[data-btn="primary"]:hover{background:#125c9c !important}
a[data-btn="white"]:hover{background:#eaf2fb !important}
a[data-btn="ghost"]:hover{background:rgba(255,255,255,.14) !important}
a[data-btn="icon"]:hover{background:#eef4fb !important;border-color:#1874c0 !important}
footer a[href]{transition:color .2s}
footer a[href]:hover{color:#ffffff}
a[data-social]{transition:background .2s,border-color .2s,color .2s}
a[data-social]:hover{background:#1874c0 !important;border-color:#1874c0 !important;color:#fff !important}
@media(max-width:1000px){.desk-nav{display:none !important}.mobile-menu-btn{display:inline-flex !important}.header-cta{display:none !important}.call-link{display:none !important}}
@media(max-width:1080px){
  .g4{grid-template-columns:repeat(2,minmax(0,1fr))}
  .g3{grid-template-columns:repeat(2,minmax(0,1fr))}
  .gfoot{grid-template-columns:1fr 1fr;gap:32px !important}
  h1{font-size:48px !important}h2{font-size:32px !important}
}
@media(max-width:720px){
  .g2,.g3,.g4,.gfoot{grid-template-columns:1fr}
  .util-links,.call-link{display:none !important}
  .pad{padding-left:20px !important;padding-right:20px !important}
  .hero-pad{padding:64px 20px !important}
  h1{font-size:34px !important}h2{font-size:27px !important}
  .util-bar{justify-content:center !important}
}
.blog-card{background:#fff;border:1px solid #e4eaf1;border-radius:14px;overflow:hidden;box-shadow:0 14px 40px rgba(8,27,51,.06);display:flex;flex-direction:column;transition:box-shadow .2s,transform .2s}
.blog-card:hover{box-shadow:0 24px 56px rgba(8,27,51,.12);transform:translateY(-3px)}
.blog-card .bc-body{padding:26px 24px 28px;display:flex;flex-direction:column;flex:1}
.blog-card .bc-meta{font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#1874c0;margin-bottom:12px}
.blog-card h3{font-size:19px;color:#0d2340;margin-bottom:10px}
.blog-card p{font-size:14px;line-height:1.65;color:#5a6b80;flex:1}
.blog-card .bc-more{margin-top:18px;font-weight:700;font-size:13.5px;color:#1874c0}
`;

export default function GlobalStyles() {
  return <style dangerouslySetInnerHTML={{ __html: CSS }} />;
}
