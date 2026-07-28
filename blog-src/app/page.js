import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Blog | Luso Glass Newark NJ Custom Glass Company",
  description:
    "Glass care tips, project inspiration, and industry insights from Luso Glass — Newark, NJ's trusted custom glass company since 1993.",
  alternates: { canonical: "https://lusoglass.com/blogs/" },
  openGraph: {
    type: "website",
    siteName: "Luso Glass",
    locale: "en_US",
    title: "Blog | Luso Glass Newark NJ Custom Glass Company",
    description:
      "Glass care tips, project inspiration, and industry insights from Luso Glass — Newark, NJ's trusted custom glass company since 1993.",
    url: "https://lusoglass.com/blogs/",
    images: ["https://lusoglass.com/assets/luso-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Luso Glass Newark NJ Custom Glass Company",
    description:
      "Glass care tips, project inspiration, and industry insights from Luso Glass — Newark, NJ's trusted custom glass company since 1993.",
    images: ["https://lusoglass.com/assets/luso-logo.png"],
  },
};

const posts = [
  {
    slug: "#",
    imageId: "blog-1",
    placeholder: "Frameless shower glass",
    category: "Residential Glass",
    title: "How to Choose the Right Glass for Your Shower Enclosure",
    excerpt:
      "A look at thickness, hardware finishes, and glass types to consider before upgrading your bathroom.",
  },
  {
    slug: "#",
    imageId: "blog-2",
    placeholder: "Storefront glass",
    category: "Commercial Glass",
    title: "5 Signs Your Storefront Glass Needs Replacing",
    excerpt:
      "Cracks, fogging, and drafts can hurt your business — here's what to watch for and when to call a professional.",
  },
  {
    slug: "#",
    imageId: "blog-3",
    placeholder: "Glass railing installation",
    category: "Glass Railings",
    title: "Glass Railings vs. Traditional Railings: What's Right for You?",
    excerpt:
      "Comparing style, maintenance, and cost between glass and traditional railing systems for homes and businesses.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://lusoglass.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://lusoglass.com/blogs/" },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://lusoglass.com/#business",
  name: "Luso Glass",
  image: "https://lusoglass.com/assets/luso-logo.png",
  url: "https://lusoglass.com/",
  telephone: "+19738203489",
  email: "info@lusoglass.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "58 Stockton St",
    addressLocality: "Newark",
    addressRegion: "NJ",
    addressCountry: "US",
  },
  areaServed: [
    "Newark, NJ", "Union County, NJ", "Hudson County, NJ", "Essex County, NJ",
    "Morris County, NJ", "Somerset County, NJ", "Bergen County, NJ", "Passaic County, NJ",
    "Middlesex County, NJ", "Sussex County, NJ", "Warren County, NJ", "Hunterdon County, NJ",
    "Mercer County, NJ", "Monmouth County, NJ",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  priceRange: "$",
  sameAs: [
    "https://www.instagram.com/lusoglasscompany/",
    "https://www.facebook.com/lusoglass.newark/",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.1", reviewCount: "44" },
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SiteHeader />

      <section style={{ position: "relative", background: "#081b33", color: "#fff", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#0a2242,#081b33)" }} />
        <div
          className="hero-pad"
          style={{ position: "relative", maxWidth: 1240, margin: "0 auto", padding: "72px 32px", textAlign: "center" }}
        >
          <div className="rise d1" style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "#4a9de8", marginBottom: 16 }}>
            Resources
          </div>
          <h1 className="rise d2" style={{ fontSize: 46, lineHeight: 1.05 }}>Luso Glass Blog</h1>
          <p className="rise d3" style={{ marginTop: 20, fontSize: 16.5, lineHeight: 1.65, color: "#c3cfdf", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
            Glass care tips, project inspiration, and industry insights from Newark's trusted glass experts since 1993.
          </p>
        </div>
      </section>

      <section style={{ background: "#f5f9fd" }}>
        <div className="grid g3 pad" style={{ maxWidth: 1240, margin: "0 auto", padding: "80px 32px", gap: 32 }}>
          {posts.map((post) => (
            <a className="blog-card" href={post.slug} key={post.imageId}>
              <div style={{ height: 190, position: "relative" }}>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <image-slot id={post.imageId} shape="rect" fit="cover" placeholder={post.placeholder}></image-slot>
              </div>
              <div className="bc-body">
                <div className="bc-meta">{post.category}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="bc-more">Read More →</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
