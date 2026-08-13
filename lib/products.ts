export type Product = {
  name: string;
  label: string;
  description: string;
  metric: string;
  status: "Live" | "Beta" | "Coming soon";
  url: string;
  initials: string;
  previewImage: string;
  accent: "emerald" | "indigo" | "amber" | "teal" | "orange";
};

export const products: Product[] = [
  {
    name: "DowaLabs",
    label: "AI for commerce",
    description:
      "Content generation that helps online sellers show up, stand out, and sell with confidence.",
    metric: "AI Automatic Content Creator",
    status: "Live",
    url: "https://generator.dowa-labs.com",
    initials: "DL",
    previewImage: "/images/dowalabs.png",
    accent: "emerald",
  },
  {
    name: "HRGA",
    label: "HR & Operations",
    description:
      "Human Resource and General Affair web-based app — kelola data karyawan, administrasi HR, dan operasional kantor dalam satu sistem.",
    metric: "Web-based HR & GA management",
    status: "Live",
    url: "https://hrga.dowa-labs.com",
    initials: "HR",
    previewImage: "/images/hrga.png",
    accent: "indigo",
  },
  {
    name: "Hadirly",
    label: "Attendance",
    description:
      "Sistem absensi online yang menggantikan pencatatan manual — akurat, real-time, dan mudah diaudit.",
    metric: "Online Attendance System",
    status: "Live",
    url: "https://hadirly.dowa-labs.com",
    initials: "HD",
    previewImage: "/images/hadirly.png",
    accent: "teal",
  },
  {
    name: "Scheduler",
    label: "Production",
    description:
      "Atur dan pantau jadwal proses produksi Anda — dari perencanaan sampai eksekusi, semua dalam satu dashboard.",
    metric: "Production Scheduling Tool",
    status: "Live",
    url: "https://scheduler.dowa-labs.com",
    initials: "SC",
    previewImage: "/images/scheduler.png",
    accent: "orange",
  },
  {
    name: "TaxBuddy",
    label: "Tax & Compliance",
    description:
      "Generate file XML otomatis, siap upload langsung ke Coretax — hilangkan proses manual yang rawan salah.",
    metric: "Automatic XML Generator for Coretax",
    status: "Live",
    url: "https://taxbuddy.dowa-labs.com",
    initials: "TB",
    previewImage: "/images/taxbuddy.png",
    accent: "amber",
  },
];

export const featuredProducts = products.filter(({ name }) =>
  ["DowaLabs", "HRGA", "TaxBuddy"].includes(name),
);
