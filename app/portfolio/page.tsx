import type { Metadata } from "next";
import ProductCard from "../../components/ui/product-card";
import { products } from "../../lib/products";

export const metadata: Metadata = {
  title: "All Products — Dowa Labs Portfolio",
  description:
    "Jelajahi seluruh produk SaaS Dowa Labs: DowaLabs, HRGA, Hadirly, Scheduler, dan TaxBuddy — solusi untuk kebutuhan bisnis modern Indonesia.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "All Products — Dowa Labs Portfolio",
    description:
      "Jelajahi seluruh produk SaaS Dowa Labs: DowaLabs, HRGA, Hadirly, Scheduler, dan TaxBuddy — solusi untuk kebutuhan bisnis modern Indonesia.",
    url: "https://dowa-labs.com/portfolio",
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
    title: "All Products — Dowa Labs Portfolio",
    description:
      "Jelajahi seluruh produk SaaS Dowa Labs: DowaLabs, HRGA, Hadirly, Scheduler, dan TaxBuddy — solusi untuk kebutuhan bisnis modern Indonesia.",
    // TODO: ganti Twitter image placeholder dengan desain social preview final.
    images: ["/images/og-image.png"],
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="bg-gradient-to-b from-white to-slate-50 px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="text-sm font-semibold text-slate-500 transition hover:text-emerald-900"
          >
            ← Back to home
          </a>
          <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-emerald-800">
            Our portfolio
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-[-.07em] sm:text-7xl">
            All our products.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Focused software for the teams and businesses building what&apos;s
            next.
          </p>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
