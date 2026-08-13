// @ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import {
  ArrowUpRight,
  Check,
  Menu,
  MoveUpRight,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
type Product = {
  name: string;
  tagline: string;
  description: string;
  status: "Live" | "Beta" | "Coming soon";
  category: string;
  url: string;
  initials: string;
  accent: string;
};
const productData: Product[] = [
  {
    name: "DowaLabs",
    tagline: "Sell more. Create less.",
    description:
      "AI-powered content generation that helps online sellers show up, stand out, and sell with confidence.",
    status: "Live",
    category: "AI for commerce",
    url: "https://dowalabs.id",
    initials: "DL",
    accent: "mint",
  },
  {
    name: "DealerFlow",
    tagline: "Run your dealership smarter.",
    description:
      "A focused operating system for modern car dealerships—from first inquiry to final handover.",
    status: "Live",
    category: "Sales & CRM",
    url: "https://dealerflow.id",
    initials: "DF",
    accent: "violet",
  },
  {
    name: "Nvolve",
    tagline: "Software that moves business forward.",
    description:
      "Thoughtful custom software for teams with ambitious ideas and real problems to solve.",
    status: "Beta",
    category: "Custom development",
    url: "https://nvolve.dev",
    initials: "NV",
    accent: "peach",
  },
];
const getProducts = async () => {
  await new Promise((r) => setTimeout(r, 180));
  return productData;
};
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
};
export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const mx = useMotionValue(0),
    my = useMotionValue(0),
    sx = useSpring(mx, { stiffness: 300, damping: 20 }),
    sy = useSpring(my, { stiffness: 300, damping: 20 });
  const { data: products = [] } = useQuery({
    queryKey: ["showcase-products"],
    queryFn: getProducts,
  });
  useEffect(() => {
    const ids = ["top", "products", "why", "about", "contact"];
    const obs = new IntersectionObserver(
      (es) => {
        const hit = es.find((e) => e.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-25% 0px -65%" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  const move = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left - r.width / 2) / r.width) * 16);
    my.set(((e.clientY - r.top - r.height / 2) / r.height) * 16);
  };
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };
  return (
    <main className="overflow-hidden bg-[#f8faf7]">
      <nav className="absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink-900 font-extrabold text-white">
              D
            </span>
            <span className="font-extrabold tracking-[-.04em]">dowa labs</span>
          </a>
          <div
            className={`absolute left-4 right-4 top-20 flex flex-col gap-5 rounded-2xl border border-[#dfe9e3] bg-white p-6 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${open ? "flex" : "hidden md:flex"}`}
          >
            {[
              ["top", "Home"],
              ["products", "Products"],
              ["why", "Why Dowa"],
              ["about", "About us"],
            ].map(([id, label]) => (
              <a
                key={id}
                onClick={() => setOpen(false)}
                href={"#" + id}
                className={`text-sm transition ${active === id ? "font-bold text-emerald-600" : "text-[#617169] hover:text-[#17231f]"}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ink-900 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Let&rsquo;s talk{" "}
              <ArrowUpRight className="ml-1 inline" size={14} />
            </a>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 md:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
      <section
        id="top"
        onMouseMove={(e) => setSpot({ x: e.clientX, y: e.clientY })}
        className="hero-mesh relative mx-auto min-h-[700px] max-w-7xl px-6 pb-24 pt-40 lg:px-8 lg:pb-32 lg:pt-48"
      >
        <div
          className="hero-spotlight hidden md:block"
          style={{ left: spot.x, top: spot.y }}
        />
        <motion.div
          className="absolute right-20 top-32 hidden h-56 w-56 rounded-full bg-emerald-300/20 blur-[80px] md:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative max-w-4xl">
          <motion.div
            {...reveal}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cfe8da] bg-white/70 px-3.5 py-2 text-xs font-bold tracking-wide text-emerald-700"
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.35, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            Building what matters
          </motion.div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-[-.065em] text-ink-900 sm:text-7xl lg:text-[88px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              Real problems.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="text-emerald-600"
            >
              Useful software.
            </motion.div>
          </h1>
          <motion.p
            {...reveal}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-8 text-[#6d7c73]"
          >
            Dowa Labs is a product studio building focused SaaS for businesses
            in Indonesia—and beyond.
          </motion.p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <motion.a
              style={{ x: sx, y: sy }}
              onMouseMove={move}
              onMouseLeave={() => {
                mx.set(0);
                my.set(0);
              }}
              href="#products"
              className="rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#17231f]/10 transition hover:bg-emerald-700"
            >
              Explore our products{" "}
              <ArrowUpRight className="ml-2 inline" size={16} />
            </motion.a>
            <a href="#about" className="text-sm font-semibold text-[#4e675b]">
              Our story <span className="ml-2">↓</span>
            </a>
          </div>
        </div>
        <div className="relative mt-24 flex items-center gap-5 text-sm text-[#789087]">
          <div className="flex -space-x-2">
            {products.map((p) => (
              <Avatar key={p.initials} product={p} />
            ))}
          </div>
          <span>3 products in the studio</span>
        </div>
      </section>
      <section id="products" className="bg-white px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-emerald-600">
                Our portfolio
              </p>
              <h2 className="text-4xl font-extrabold tracking-[-.055em] sm:text-5xl">
                Things we&rsquo;re building.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#819087]">
              Small, sharp products designed to make everyday business feel a
              little simpler.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.name} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section id="why" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <motion.div {...reveal}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-emerald-600">
              Why Dowa Labs
            </p>
            <h2 className="max-w-md text-4xl font-extrabold leading-tight tracking-[-.055em] sm:text-5xl">
              We build with skin in the game.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#74837a]">
              We believe the best software starts close to the problem. Every
              product we launch is shaped by real conversations, real
              constraints, and real ambition.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              [
                "01",
                "Move quickly",
                "From idea to useful, without the unnecessary theatre.",
                <Zap />,
              ],
              [
                "02",
                "Stay close",
                "Built alongside the people who live the problem.",
                <Sparkles />,
              ],
              [
                "03",
                "Make it count",
                "Simple products, clear outcomes, lasting value.",
                <Check />,
              ],
            ].map(([n, t, d, icon]) => (
              <motion.div
                key={n as string}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-[#e2ebe5] bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-600 [&>svg]:h-4 [&>svg]:w-4">
                    {icon}
                  </span>
                  <span className="text-xs font-bold text-[#b1bdb6]">{n}</span>
                </div>
                <h3 className="mt-8 text-base font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-6 text-[#849189]">{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section
        id="about"
        className="relative overflow-hidden bg-ink-900 px-6 py-24 text-white lg:px-8 lg:py-32"
      >
        <span className="pointer-events-none absolute -left-4 -top-20 text-[240px] font-serif leading-none text-emerald-500/[.06]">
          &ldquo;
        </span>
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-emerald-300">
              A note from the founder
            </p>
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(15,167,109,.4)",
                  "0 0 20px rgba(15,167,109,.4)",
                  "0 0 0px rgba(15,167,109,.4)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-[#315d4e] text-lg font-bold"
            >
              JS
            </motion.div>
          </div>
          <motion.div {...reveal}>
            <blockquote className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">
              &ldquo;Good software should feel like someone finally understood
              what you were trying to do.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#a9c2b5]">
              <span className="font-semibold text-white">Jeki Sauwani</span>
              <span className="h-1 w-1 rounded-full bg-[#668578]" />
              <span>Founder, Dowa Labs</span>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="contact" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[28px] bg-emerald-100 p-8 sm:p-12 lg:grid-cols-[1fr_.8fr] lg:p-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-emerald-700">
              Have a good problem?
            </p>
            <h2 className="max-w-lg text-4xl font-extrabold leading-tight tracking-[-.055em] sm:text-5xl">
              Let&rsquo;s make something useful.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#57776a]">
              Whether you want to use one of our products, partner with us, or
              have an idea worth exploring—we&rsquo;d love to hear from you.
            </p>
            <a
              href="mailto:dowatech889@gmail.com"
              className="mt-8 inline-flex items-center rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-white hover:bg-emerald-700"
            >
              dowatech889@gmail.com <MoveUpRight className="ml-2" size={16} />
            </a>
          </div>
          <form
            onSubmit={submit}
            className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
          >
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#788980]">
              Your email
            </label>
            <input
              required
              type="email"
              placeholder="you@company.com"
              className="mb-5 w-full rounded-xl border border-[#dce9e1] bg-[#fbfdfb] px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
            />
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#788980]">
              How can we help?
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell us a little about it..."
              className="mb-5 w-full resize-none rounded-xl border border-[#dce9e1] bg-[#fbfdfb] px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50"
            />
            <motion.button
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              className="w-full rounded-xl bg-ink-900 py-3.5 text-sm font-bold text-white hover:bg-emerald-700 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : sent ? (
                "Thanks — we&rsquo;ll be in touch."
              ) : (
                <>
                  Send inquiry{" "}
                  <motion.span
                    whileHover={{ x: 3, y: -3 }}
                    className="ml-1 inline-block"
                  >
                    <ArrowUpRight size={15} />
                  </motion.span>
                </>
              )}
            </motion.button>
          </form>
        </div>
      </section>
      <footer className="border-t border-[#e5ece7] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-[#84938a] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold text-ink-900">
            dowa labs<span className="text-emerald-600">.</span>
          </span>
          <span>© 2026 Dowa Labs. Built with purpose in Indonesia.</span>
          <div className="flex gap-5">
            <a href="#about">About</a>
            <a href="mailto:dowatech889@gmail.com">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
function Avatar({ product }: { product: Product }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ scale: 1.15, zIndex: 2 }}
      className="relative grid h-8 w-8 cursor-default place-items-center rounded-full border-2 border-[#f8faf7] bg-[#d1e9da] text-[10px] font-bold text-[#367355]"
    >
      <span>{product.initials}</span>
      <AnimatePresence>
        {hover && (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute bottom-10 whitespace-nowrap rounded-md bg-ink-900 px-2 py-1 text-[10px] font-medium text-white"
          >
            {product.name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.a
      {...reveal}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex min-h-[390px] overflow-hidden rounded-[24px] border p-7 transition duration-200 hover:border-emerald-500/40 hover:shadow-xl ${product.accent === "mint" ? "border-[#bde8d1] bg-[#e2f8ed]" : product.accent === "violet" ? "border-[#dbd2f5] bg-[#f0edff]" : "border-[#f4d8ad] bg-[#fff1d9]"}`}
    >
      <div className="flex w-full items-start justify-between">
        <span className="rounded-full bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#64766c]">
          {product.category}
        </span>
        <span
          className={`rounded-full px-3 py-1.5 text-[11px] font-bold ${product.status === "Live" ? "bg-white text-emerald-600" : "bg-[#fff0d7] text-[#af731e]"}`}
        >
          {product.status}
        </span>
      </div>
      <div className="mt-auto">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white text-lg font-extrabold shadow-sm"
        >
          {product.initials}
        </motion.div>
        <h3 className="text-3xl font-extrabold tracking-[-.06em]">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-semibold tracking-[-.025em] text-[#3b5147]">
          {product.tagline}
        </p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-[#74837a]">
          {product.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-emerald-700">
          Visit product{" "}
          <span className="transition group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute right-7 top-[84px] text-5xl font-extrabold text-black/[.04]"
      >
        0{index + 1}
      </motion.span>
    </motion.a>
  );
}
