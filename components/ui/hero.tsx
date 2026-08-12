"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Check,
  Linkedin,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { FormEvent, useState } from "react";
import ProductCard from "./product-card";
import { featuredProducts } from "../../lib/products";

const principles = [
  {
    title: "Dibangun untuk Pasar Indonesia",
    description:
      "Dukungan bahasa lokal penuh dan integrasi payment gateway lokal seperti Duitku untuk operasional yang lebih relevan.",
    icon: Sparkles,
    accent: "emerald",
  },
  {
    title: "Keamanan Tingkat Enterprise",
    description:
      "Role-based access control, audit trail, dan security audit yang mencakup IDOR, race condition, serta atomic transaction fixes.",
    icon: ShieldCheck,
    accent: "indigo",
  },
  {
    title: "Implementasi Cepat",
    description:
      "Dari kickoff ke production dalam hitungan minggu, bukan bulan—dengan proses yang terukur dan transparan.",
    icon: Zap,
    accent: "amber",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function ShaderShowcase({
  founderPhoto,
}: {
  founderPhoto?: string;
}) {
  const [form, setForm] = useState({
    company: "",
    email: "",
    product: "DowaLabs",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const { scrollY } = useScroll();
  const mockupY = useTransform(scrollY, [0, 500], [0, 42]);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Nama Perusahaan: ${form.company}\nEmail: ${form.email}\nProduk yang diminati: ${form.product}\nPesan: ${form.message}`;
    setSent(true);
    const mailto = `mailto:hello@dowa-labs.com?subject=${encodeURIComponent(`Inquiry dari ${form.company}`)}&body=${encodeURIComponent(body)}`;
    try {
      window.open(mailto, "_blank", "noopener,noreferrer");
    } catch {
      // Some browsers block mail clients; the submitted state remains visible.
    }
  };

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <motion.section
        id="top"
        className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50 px-5 pb-24 pt-24 sm:px-8 lg:px-10 lg:pb-32 lg:pt-32"
      >
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative z-10">
            <motion.div
              {...fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white p-1.5 text-xs font-bold tracking-wide text-emerald-900 shadow-sm"
            >
              <span className="rounded-full bg-slate-950 px-2.5 py-1 text-[11px] font-extrabold text-white">
                New
              </span>
              <span className="inline-flex items-center gap-2 px-1.5">
                <span className="size-2 rounded-full bg-emerald-700" />
                [TaxBuddy] is now live! <ArrowUpRight className="ml-1 size-3" />
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl text-[clamp(3.2rem,7vw,6.5rem)] font-extrabold leading-[.98] tracking-[-.075em]"
            >
              Real problems.
              <br />
              <span className="text-emerald-900">Useful software.</span>
            </motion.h1>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-8 text-slate-600"
            >
              Dowa Labs is a product studio building focused SaaS for businesses
              in Indonesia—and beyond.
            </motion.p>
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                href="#products"
                className="rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-900/10 transition hover:bg-emerald-900"
              >
                Explore our products{" "}
                <ArrowUpRight className="ml-2 inline size-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-500 hover:text-slate-950"
              >
                Watch demo <PlayCircle className="size-4" />
              </motion.a>
            </motion.div>
            <div className="mt-16 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["JS", "D", "HR", "TB"].map((initials, index) => (
                  <span
                    key={initials}
                    className={`grid size-9 place-items-center rounded-full border-2 border-white text-[10px] font-extrabold text-white ${["bg-slate-950", "bg-emerald-700", "bg-indigo-600", "bg-amber-600"][index]}`}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              {/* TODO: replace 12k+ with a verified real metric before production. */}
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold text-slate-950">
                  12k+
                </span>
                <span className="text-xs text-slate-500">
                  [10k+ metric verified] users across Indonesia
                </span>
              </div>
            </div>
          </div>
          <motion.div
            style={{ y: mockupY }}
            initial={{ opacity: 0, x: 36, rotateY: -10, rotateZ: 2 }}
            animate={{ opacity: 1, x: 0, rotateY: -3, rotateZ: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[620px] perspective-[1200px]"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15 ring-1 ring-emerald-900/5">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center gap-1.5 border-b border-slate-200 bg-white px-4 py-3">
                  <span className="size-2.5 rounded-full bg-slate-300" />
                  <span className="size-2.5 rounded-full bg-slate-300" />
                  <span className="size-2.5 rounded-full bg-slate-300" />
                  <span className="ml-3 h-6 flex-1 rounded-md bg-slate-100" />
                </div>
                <div className="grid min-h-[260px] grid-cols-[72px_1fr] sm:min-h-[340px] sm:grid-cols-[110px_1fr]">
                  <div className="border-r border-slate-200 bg-slate-950 p-3">
                    <div className="mb-8 h-5 w-8 rounded bg-white/20" />
                    <div className="grid gap-3">
                      {[1, 2, 3, 4].map((item) => (
                        <span
                          key={item}
                          className={`h-2 rounded ${item === 1 ? "w-11 bg-emerald-500" : "w-8 bg-white/15"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-4 sm:p-7">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="h-3 w-24 rounded bg-slate-200" />
                        <div className="mt-3 h-7 w-40 rounded bg-slate-900" />
                      </div>
                      <div className="h-8 w-20 rounded-lg bg-emerald-800" />
                    </div>
                    <div className="mt-7 grid gap-3 sm:grid-cols-3">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="rounded-lg border border-slate-200 bg-white p-3"
                        >
                          <div className="h-2 w-12 rounded bg-slate-200" />
                          <div className="mt-3 h-5 w-16 rounded bg-slate-800" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 h-20 rounded-lg border border-slate-200 bg-white p-3">
                      <div className="flex h-full items-end gap-2">
                        {[35, 55, 42, 72, 62, 85, 68, 92].map(
                          (height, index) => (
                            <span
                              key={index}
                              style={{ height: `${height}%` }}
                              className="flex-1 rounded-t bg-emerald-800/80"
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 top-8 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block"
            >
              {/* <p className="text-[10px] font-bold uppercase tracking-[.15em] text-slate-400">
                Portfolio status
              </p> */}
              <p className="mt-1 text-sm font-extrabold text-slate-950">
                [ISI: metrik singkat]
              </p>
            </motion.div>
            <motion.div
              aria-hidden="true"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
              className="absolute -left-3 bottom-12 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block"
            >
              <p className="text-[10px] font-bold uppercase tracking-[.15em] text-emerald-700">
                Dowa Labs
              </p>
              <p className="mt-1 text-xs font-semibold text-slate-600">
                [ISI: insight singkat]
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section
        aria-label="Trusted by teams"
        className="border-y border-slate-200 bg-white px-5 py-10 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          {/* <p className="text-center text-xs font-bold uppercase tracking-[.2em] text-slate-400">
            [ISI: teks pengantar trusted-by section]
          </p> */}
          {/* TODO: ganti dengan logo klien asli sebelum production. */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {["[LOGO 1]", "[LOGO 2]", "[LOGO 3]", "[LOGO 4]", "[LOGO 5]"].map(
              (label) => (
                <div
                  key={label}
                  className="grid h-10 place-items-center rounded-lg bg-slate-200 px-3 text-xs font-bold tracking-wide text-slate-500 grayscale opacity-60"
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="products"
        className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-emerald-800">
                Our portfolio
              </p>
              <h2 className="text-4xl font-extrabold tracking-[-.06em] sm:text-5xl">
                Things we&apos;re building.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Small, sharp products designed to make everyday business feel a
              little simpler.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="/portfolio"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-800 hover:text-emerald-900"
            >
              More products <ArrowUpRight className="ml-2 size-4" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="bg-stone-50 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-emerald-800">
              Why Dowa Labs
            </p>
            <h2 className="max-w-xl text-4xl font-extrabold leading-tight tracking-[-.06em] sm:text-5xl">
              Kenapa Perusahaan Enterprise Percaya Dowa Labs
            </h2>
            <p className="mt-6 max-w-md leading-7 text-slate-600">
              Software yang serius membutuhkan partner yang memahami konteks
              bisnis, risiko operasional, dan target pertumbuhan Anda.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((principle, index) => (
              <EnterprisePrincipleCard
                key={`enterprise-principle-${index}`}
                principle={principle}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 text-xs font-bold uppercase tracking-[.2em] text-emerald-300">
            A note from the founders
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <FounderTestimonial
              quote="Good software should feel like someone finally understood what you were trying to do."
              name="Jeki Sauwani"
              role="Co-founder, Dowa Labs"
              initials="JS"
              photo={founderPhoto}
              linkedinUrl="https://www.linkedin.com"
            />
            <FounderTestimonial
              quote="The best partnerships don't feel like vendors and clients. They feel like two teams solving the same problem."
              name="Demonte"
              role="Co-founder, Dowa Labs"
              initials="D"
              linkedinUrl="[ISI LINK LINKEDIN DEMONTE]"
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm sm:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-emerald-800">
              Have a good problem?
            </p>
            <h2 className="max-w-lg text-4xl font-extrabold leading-tight tracking-[-.06em] sm:text-5xl">
              Let&apos;s make something useful.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-slate-600">
              Want to use one of our products, partner with us, or explore an
              idea? We&apos;d love to hear from you.
            </p>
            <a
              href="mailto:hello@dowa-labs.com"
              className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-900"
            >
              hello@dowa-labs.com <ArrowUpRight className="ml-2 size-4" />
            </a>
          </div>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
              htmlFor="company"
            >
              Nama Perusahaan
            </label>
            <input
              id="company"
              name="company"
              required
              value={form.company}
              onChange={(event) =>
                setForm({ ...form, company: event.target.value })
              }
              placeholder="Nama perusahaan Anda"
              className="mb-5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20"
            />
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              placeholder="you@company.com"
              className="mb-5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20"
            />
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
              htmlFor="product"
            >
              Produk yang diminati
            </label>
            <select
              id="product"
              name="product"
              value={form.product}
              onChange={(event) =>
                setForm({ ...form, product: event.target.value })
              }
              className="mb-5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20"
            >
              <option>DowaLabs</option>
              <option>HRGA</option>
              <option>Hadirly</option>
              <option>Scheduler</option>
              <option>TaxBuddy</option>
              <option>Custom Project / Lainnya</option>
            </select>
            <label
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-600"
              htmlFor="message"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              rows={3}
              placeholder="Tell us a little about it..."
              className="mb-5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-slate-950 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-900"
            >
              {sent ? "Inquiry prepared — thank you" : "Send inquiry"}{" "}
              <ArrowUpRight className="ml-1 inline size-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function EnterprisePrincipleCard({
  principle,
  index,
}: {
  principle: (typeof principles)[number];
  index: number;
}) {
  const Icon = principle.icon;
  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.1 }}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span
          className={`grid size-9 place-items-center rounded-xl border ${principle.accent === "emerald" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : principle.accent === "indigo" ? "border-indigo-100 bg-indigo-50 text-indigo-700" : "border-amber-100 bg-amber-50 text-amber-700"}`}
        >
          <Icon size={16} />
        </span>
        <span className="text-xs font-bold text-slate-300">0{index + 1}</span>
      </div>
      <h3 className="mt-8 font-bold leading-6">{principle.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">
        {principle.description}
      </p>
    </motion.div>
  );
}

function FounderTestimonial({
  quote,
  name,
  role,
  initials,
  photo,
  linkedinUrl,
}: {
  quote: string;
  name: string;
  role: string;
  initials: string;
  photo?: string;
  linkedinUrl: string;
}) {
  return (
    <motion.article
      {...fadeUp}
      className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-xl shadow-black/10 sm:p-8"
    >
      <blockquote className="text-2xl font-semibold leading-tight tracking-[-.035em] sm:text-3xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-10 text-sm text-slate-400">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            width={48}
            height={48}
            className="size-12 rounded-xl object-cover"
          />
        ) : (
          <div className="grid size-12 place-items-center rounded-xl bg-slate-800 font-bold text-white">
            {initials}
          </div>
        )}
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p>{role}</p>
        </div>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name + " on LinkedIn"}
          className="ml-auto inline-flex items-center gap-1 text-emerald-300 transition hover:text-white"
        >
          <Linkedin size={14} /> LinkedIn
        </a>
      </div>
    </motion.article>
  );
}
