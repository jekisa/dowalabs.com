"use client";

import { ArrowUp, ArrowUpRight, Bell, Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Products", href: "/portfolio" },
  { label: "Why Dowa", href: "/#why" },
  { label: "About", href: "/#about" },
];

const mobileItemVariants = {
  closed: { opacity: 0, x: -12 },
  open: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.25, delay: index * 0.05 },
  }),
};

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setVisible(
      sessionStorage.getItem("dowa-announcement-dismissed") !== "true",
    );
  }, []);
  if (!visible) return null;
  return (
    <div className="sticky top-0 z-50 bg-slate-950 px-12 py-2.5 pl-4 text-center text-xs font-medium leading-5 text-white sm:px-10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <Bell size={13} className="text-emerald-300" />
        <span>Big news — we reduced our fees!! </span>
        <a
          href="/#contact"
          className="font-bold text-emerald-300 hover:text-white"
        >
          Learn more <ArrowUpRight className="ml-0.5 inline size-3" />
        </a>
      </div>
      <button
        aria-label="Dismiss announcement"
        onClick={() => {
          sessionStorage.setItem("dowa-announcement-dismissed", "true");
          setVisible(false);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-white/60 hover:bg-white/10 hover:text-white"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export function SiteNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 20;
    setScrolled((current) => (current === next ? current : next));
  });

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`sticky top-0 z-[60] border-b transition-all duration-300 ${scrolled ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md" : "border-transparent bg-transparent"}`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-10 ${scrolled ? "py-3" : "py-5"}`}
      >
        <motion.a
          href="/"
          className="flex items-center gap-2.5 font-extrabold tracking-[-.04em]"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="grid size-9 place-items-center rounded-xl bg-slate-950 text-sm text-white"
          >
            D
          </motion.span>
          dowa labs<span className="text-emerald-800">.</span>
        </motion.a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/portfolio" && pathname === "/portfolio";
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-0 py-2 text-sm font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-emerald-600 after:transition-transform after:duration-200 ${active ? "text-slate-900 after:scale-x-100" : "text-slate-600 after:scale-x-0 hover:text-slate-900 hover:after:scale-x-100"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
          <motion.a
            href="/#contact"
            className="group inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white transition duration-200 hover:scale-105 hover:bg-emerald-900 hover:shadow-lg"
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s talk
            <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        <motion.button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="relative z-[60] rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          whileTap={{ scale: 0.92 }}
        >
          <motion.span
            className="block"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </motion.span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-40 bg-slate-950/20 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={closeMenu}
            />
            <motion.div
              className="absolute left-4 right-4 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:hidden"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="grid gap-1">
                {navItems.map((item, index) => {
                  const active =
                    item.href === "/portfolio" && pathname === "/portfolio";
                  return (
                    <motion.a
                      key={item.href}
                      custom={index}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      href={item.href}
                      onClick={closeMenu}
                      className={`rounded-xl px-3 py-3 text-sm font-semibold transition-colors duration-200 ${active ? "bg-emerald-50 text-emerald-800" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
                <motion.a
                  custom={navItems.length}
                  variants={mobileItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  href="/#contact"
                  onClick={closeMenu}
                  className="group mt-2 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-emerald-900"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="ml-1 size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 pb-8 pt-14 sm:px-8 lg:px-10 lg:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="/"
              className="flex items-center gap-2.5 font-extrabold tracking-[-.04em] text-slate-950"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-slate-950 text-sm text-white">
                D
              </span>
              dowa labs<span className="text-emerald-800">.</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-500">
              A product studio building useful software for real businesses in
              Indonesia and beyond.
            </p>
            <a
              href="mailto:hello@dowa-labs.com"
              className="mt-5 inline-flex text-sm font-bold text-emerald-900"
            >
              hello@dowa-labs.com <ArrowUpRight className="ml-1 size-4" />
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">
              Explore
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              <a href="/#products">Products</a>
              <a href="/#why">Why Dowa</a>
              <a href="/#about">About us</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">
              Products
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-600">
              <a
                href="https://dowa-labs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                DowaLabs <ArrowUpRight className="ml-1 inline size-3.5" />
              </a>
              <a href="/portfolio">HRGA</a>
              <a href="/portfolio">Hadirly</a>
              <a href="/portfolio">Scheduler</a>
              <a href="/portfolio">TaxBuddy</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">
              Let&apos;s connect
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Have a good problem? Start a conversation and let&apos;s make
              something useful.
            </p>
            <a
              href="/#contact"
              className="mt-4 inline-flex rounded-full bg-slate-950 px-4 py-2.5 text-xs font-bold text-white"
            >
              Start a conversation <ArrowUpRight className="ml-1 size-3.5" />
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Dowa Labs. Built with purpose in Indonesia.</span>
          <a href="#top">
            Back to top <ArrowUp className="ml-1 inline size-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
