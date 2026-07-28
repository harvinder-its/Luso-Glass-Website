const FOOTER_HTML = `
<footer style="background:#081b33;color:#9fb0c6">
<div class="grid gfoot pad" style="max-width:1240px;margin:0 auto;padding:90px 32px 44px;gap:64px">
<div>
<img src="/assets/luso-logo-white.png" alt="Luso Glass — Custom Glass Solutions" style="height:52px;width:auto;display:block;margin-bottom:18px">
<p style="font-size:14px;line-height:1.7;max-width:280px">A family-owned custom glass company serving homeowners and businesses throughout Newark and Northern New Jersey since 1993, delivering reliable service and quality craftsmanship on every project.</p>
<div style="display:flex;gap:10px;margin-top:20px">
<a href="https://www.instagram.com/lusoglasscompany/" target="_blank" rel="noopener" style="width:36px;height:36px;border:1px solid rgba(255,255,255,.2);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#9fb0c6" data-social><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg></a>
<a href="https://www.facebook.com/lusoglass.newark/" target="_blank" rel="noopener" style="width:36px;height:36px;border:1px solid rgba(255,255,255,.2);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#9fb0c6" data-social><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"/></svg></a>
</div>
</div>
<div>
<div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#fff;margin-bottom:22px;font-weight:700">Services</div>
<div style="display:flex;flex-direction:column;gap:14px;font-size:14px">
<a href="/storefront/" style="color:#9fb0c6">Storefronts</a><a href="/interior-partition/" style="color:#9fb0c6">Interior Partitions</a><a href="/glass-entrance/" style="color:#9fb0c6">Glass Entrances</a><a href="/glass-railings/" style="color:#9fb0c6">Glass Railings</a><a href="/showers/" style="color:#9fb0c6">Frameless Showers</a><a href="/mirrors/" style="color:#9fb0c6">Mirrors</a>
</div>
</div>
<div>
<div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#fff;margin-bottom:22px;font-weight:700">Company</div>
<div style="display:flex;flex-direction:column;gap:14px;font-size:14px">
<a href="/about-us/" style="color:#9fb0c6">About</a><a href="/service-areas/" style="color:#9fb0c6">Service Areas</a><a href="/#projects" style="color:#9fb0c6">Projects</a><a href="/blogs/" style="color:#9fb0c6">Blog</a><a href="/contact/" style="color:#9fb0c6">Contact</a>
</div>
</div>
<div>
<a href="/service-areas/" style="display:block;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#fff;margin-bottom:22px;font-weight:700">NJ Service Areas</a>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px 16px;font-size:13.5px;align-items:start"><a href="/service-areas/glass-services-in-union/" style="color:#9fb0c6">Union County</a><a href="/service-areas/glass-services-in-hudson/" style="color:#9fb0c6">Hudson County</a><a href="/service-areas/glass-services-in-essex/" style="color:#9fb0c6">Essex County</a><a href="/service-areas/glass-services-in-morris/" style="color:#9fb0c6">Morris County</a><a href="/service-areas/glass-services-in-somerset/" style="color:#9fb0c6">Somerset County</a><a href="/service-areas/glass-services-in-bergen/" style="color:#9fb0c6">Bergen County</a><a href="/service-areas/glass-services-in-passaic-nj/" style="color:#9fb0c6">Passaic County</a><a href="/service-areas/glass-services-in-middlesex-nj/" style="color:#9fb0c6;white-space:nowrap">Middlesex County</a><a href="/service-areas/glass-services-in-sussex-nj/" style="color:#9fb0c6">Sussex County</a><a href="/service-areas/glass-services-in-warren-nj/" style="color:#9fb0c6">Warren County</a><a href="/service-areas/glass-services-in-hunterdon-nj/" style="color:#9fb0c6;white-space:nowrap">Hunterdon County</a><a href="/service-areas/glass-services-in-mercer-nj/" style="color:#9fb0c6">Mercer County</a><a href="/service-areas/glass-services-in-monmouth-nj/" style="color:#9fb0c6">Monmouth County</a></div>
</div>
</div>
<div style="border-top:1px solid rgba(255,255,255,.12)">
<div class="pad" style="max-width:1240px;margin:0 auto;padding:22px 32px;display:flex;justify-content:space-between;gap:20px;font-size:13px;flex-wrap:wrap">
<span>© 1993–2026 Luso Glass. All rights reserved.</span>
<div style="display:flex;gap:22px"><a href="/privacy-policy/" style="color:#9fb0c6">Privacy Policy</a><a href="/terms-conditions/" style="color:#9fb0c6">Terms</a></div>
</div>
</div>
</footer>
`;

export default function SiteFooter() {
  return <div dangerouslySetInnerHTML={{ __html: FOOTER_HTML }} />;
}
