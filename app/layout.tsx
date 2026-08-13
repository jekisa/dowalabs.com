import "./globals.css";
import Providers from "./providers";
import type { Metadata, Viewport } from "next";
import {
  AnnouncementBar,
  SiteFooter,
  SiteNavbar,
} from "../components/ui/site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://dowa-labs.com"),
  title: "Dowa Labs — Useful software for real problems",
  description:
    "Dowa Labs is a product studio building focused SaaS for ambitious businesses.",
  openGraph: {
    title: "Dowa Labs — Useful software for real problems",
    description:
      "Dowa Labs is a product studio membangun software SaaS untuk bisnis di Indonesia.",
    url: "https://dowa-labs.com",
    siteName: "Dowa Labs",
    locale: "id_ID",
    type: "website",
    // TODO: ganti gambar OG placeholder dengan social preview resmi Dowa Labs.
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dowa Labs — Real Problems, Useful Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dowa Labs — Useful software for real problems",
    description:
      "Dowa Labs is a product studio membangun software SaaS untuk bisnis di Indonesia.",
    // TODO: ganti gambar Twitter placeholder dengan social preview resmi Dowa Labs.
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dowa Labs",
  url: "https://dowa-labs.com",
  description:
    "Product studio membangun software SaaS untuk bisnis di Indonesia",
  email: "dowatech889@gmail.com",
  // TODO: tambahkan link LinkedIn/Instagram Dowa Labs jika ada.
  sameAs: [],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Providers>
          <AnnouncementBar />
          <SiteNavbar />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
