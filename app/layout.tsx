import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Konfigurasi metadata SEO untuk greenappstelkom
export const metadata = {
  title: "greenappstelkom - Solusi Pengelolaan Sampah Terbaik",
  description:
    "greenappstelkom menyediakan solusi pengelolaan sampah yang inovatif dan profesional untuk perusahaan besar, dengan pendekatan ramah lingkungan dan teknologi canggih.",
  keywords: [
    "pengelolaan sampah",
    "waste management",
    "solusi sampah",
    "inovatif",
    "profesional",
    "ramah lingkungan",
    "greenappstelkom",
  ],
  openGraph: {
    title: "greenappstelkom - Solusi Pengelolaan Sampah Terbaik",
    description:
      "greenappstelkom adalah perusahaan pengelolaan sampah terdepan yang menyediakan solusi inovatif dan profesional untuk pengelolaan sampah perusahaan besar.",
    url: "https://greenappstelkom.id",
    siteName: "greenappstelkom",
    images: [
      {
        url: "https://greenappstelkom.id/favicon.png",
        width: 1200,
        height: 630,
        alt: "greenappstelkom - Solusi Pengelolaan Sampah",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@greenappstelkom",
    title: "greenappstelkom - Solusi Pengelolaan Sampah Terbaik",
    description:
      "greenappstelkom adalah perusahaan pengelolaan sampah terdepan dengan solusi inovatif, profesional, dan ramah lingkungan.",
    images: ["https://greenappstelkom.id/favicon.png"],
  },
  alternates: {
    canonical: "https://greenappstelkom.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://greenappstelkom.id/favicon.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://greenappstelkom.id/favicon.png"
        />
        {/* Structured Data untuk Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "greenappstelkom",
              url: "https://greenappstelkom.id",
              logo: "https://greenappstelkom.id/logo.png",
              description:
                "greenappstelkom adalah perusahaan pengelolaan sampah terdepan yang menyediakan solusi inovatif, profesional, dan ramah lingkungan.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-XXX-XXX-XXX",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: ["Indonesian", "English"],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
