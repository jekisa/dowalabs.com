import type { Metadata } from "next";
import ShaderShowcase from "../components/ui/hero";

export const metadata: Metadata = {
  title:
    "Dowa Labs — Real Problems, Useful Software | B2B SaaS Studio Indonesia",
  description:
    "Dowa Labs membangun software SaaS fokus untuk bisnis di Indonesia — DowaLabs, HRGA, Hadirly, Scheduler, dan TaxBuddy. Solusi enterprise yang cepat diimplementasikan dan aman digunakan.",
  keywords: [
    "SaaS Indonesia",
    "software B2B",
    "HR software",
    "sistem absensi",
    "aplikasi pajak",
    "product studio Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Dowa Labs — Real Problems, Useful Software | B2B SaaS Studio Indonesia",
    description:
      "Dowa Labs membangun software SaaS fokus untuk bisnis di Indonesia — DowaLabs, HRGA, Hadirly, Scheduler, dan TaxBuddy. Solusi enterprise yang cepat diimplementasikan dan aman digunakan.",
    url: "https://dowa-labs.com/",
    siteName: "Dowa Labs",
    // TODO: ganti OG image placeholder dengan desain social preview final.
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dowa Labs — Real Problems, Useful Software",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dowa Labs — Real Problems, Useful Software | B2B SaaS Studio Indonesia",
    description:
      "Dowa Labs membangun software SaaS fokus untuk bisnis di Indonesia — DowaLabs, HRGA, Hadirly, Scheduler, dan TaxBuddy. Solusi enterprise yang cepat diimplementasikan dan aman digunakan.",
    // TODO: ganti Twitter image placeholder dengan desain social preview final.
    images: ["/images/og-image.png"],
  },
};

export default function Page() {
  return <ShaderShowcase />;
}
