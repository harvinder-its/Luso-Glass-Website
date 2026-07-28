import GlobalStyles from "../components/GlobalStyles";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script src="/support.js" />
        <script src="/image-slot.js" />
        <script src="/mobile-nav.js" defer />
        <GlobalStyles />
      </head>
      <body>
        <div style={{ overflowX: "clip" }}>{children}</div>
      </body>
    </html>
  );
}
