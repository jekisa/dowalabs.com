import type { Metadata } from "next";
import { ArrowLeft, Camera, Network, TrendingUp, Wind } from "lucide-react";
import ServiceCard from "../../components/ui/service-card";

export const metadata: Metadata = {
  title: "Beyond Software — Dowa Labs Services",
  description:
    "Selain membangun software, Dowa Labs menyediakan jasa instalasi jaringan kantor, CCTV, AC, dan Meta Ads Specialist untuk kebutuhan operasional bisnis Anda.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Beyond Software — Dowa Labs Services",
    description:
      "Jasa instalasi dan digital marketing untuk mendukung operasional bisnis Anda.",
    url: "https://dowa-labs.com/services",
    siteName: "Dowa Labs",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dowa Labs services",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Software — Dowa Labs Services",
    description:
      "Jasa instalasi dan digital marketing untuk mendukung operasional bisnis Anda.",
    images: ["/images/og-image.png"],
  },
};

const services = [
  {
    icon: Network,
    title: "Instalasi Jaringan Kantor",
    description:
      "Setup infrastruktur jaringan kantor Anda — dari kabel LAN, WiFi coverage, hingga konfigurasi router dan switch, siap mendukung operasional bisnis sehari-hari.",
  },
  {
    icon: Camera,
    title: "Instalasi CCTV",
    description:
      "Sistem keamanan CCTV lengkap dengan monitoring real-time, penyimpanan rekaman, dan akses remote — lindungi aset dan operasional bisnis Anda.",
  },
  {
    icon: Wind,
    title: "Instalasi AC",
    description:
      "Pemasangan dan maintenance AC untuk kenyamanan ruang kerja — teknisi berpengalaman, instalasi rapi dan sesuai standar.",
  },
  {
    icon: TrendingUp,
    title: "Meta Ads Specialist",
    description:
      "Kelola iklan Facebook & Instagram Ads Anda — dari strategi targeting, copywriting, hingga optimasi budget untuk hasil maksimal.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="bg-gradient-to-b from-white to-slate-50 px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-emerald-900"
          >
            <ArrowLeft size={15} /> Back to home
          </a>
          <p className="mt-10 text-xs font-bold uppercase tracking-[.2em] text-emerald-800">
            Our services
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold tracking-[-.07em] sm:text-7xl">
            Beyond software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Selain membangun software, Dowa Labs juga menyediakan jasa instalasi
            dan digital marketing untuk kebutuhan operasional kantor Anda.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-slate-50 px-6 py-8 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="text-2xl font-extrabold tracking-[-.04em] text-slate-950">
              Punya kebutuhan operasional lain?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Mari diskusikan solusi yang paling tepat untuk bisnis Anda.
            </p>
          </div>
          <a
            href="mailto:dowatech889@gmail.com"
            className="inline-flex shrink-0 items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-emerald-900 hover:shadow-lg"
          >
            Tanyakan kebutuhan Anda
          </a>
        </div>
      </section>
    </main>
  );
}
