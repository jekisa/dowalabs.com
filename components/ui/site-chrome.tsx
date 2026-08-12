"use client";

import { ArrowUp, ArrowUpRight, Bell, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  return (
    <nav className="relative z-30 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a
          href="/"
          className="flex items-center gap-2.5 font-extrabold tracking-[-.04em]"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-slate-950 text-sm text-white">
            D
          </span>
          dowa labs<span className="text-emerald-800">.</span>
        </a>
        <div
          className={`${open ? "block" : "hidden"} absolute left-4 right-4 top-16 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl md:static md:flex md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <a
            href="/portfolio"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-900 md:px-0"
          >
            Products
          </a>
          <a
            href="/#why"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-900 md:px-0"
          >
            Why Dowa
          </a>
          <a
            href="/#about"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-900 md:px-0"
          >
            About
          </a>
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-bold text-white hover:bg-emerald-900 md:mt-0"
          >
            Let&apos;s talk <ArrowUpRight className="ml-1 inline size-4" />
          </a>
        </div>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
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
