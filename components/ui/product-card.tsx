"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "../../lib/products";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  const accent = {
    emerald: "border-emerald-600 bg-emerald-50 text-emerald-700",
    indigo: "border-indigo-600 bg-indigo-50 text-indigo-700",
    amber: "border-amber-600 bg-amber-50 text-amber-700",
    teal: "border-teal-600 bg-teal-50 text-teal-700",
    orange: "border-orange-600 bg-orange-50 text-orange-700",
  }[product.accent];
  const avatarAccent = {
    emerald: "bg-emerald-900",
    indigo: "bg-indigo-900",
    amber: "bg-amber-900",
    teal: "bg-teal-900",
    orange: "bg-orange-900",
  }[product.accent];
  const hoverAccent = {
    emerald: "hover:border-emerald-300",
    indigo: "hover:border-indigo-300",
    amber: "hover:border-amber-300",
    teal: "hover:border-teal-300",
    orange: "hover:border-orange-300",
  }[product.accent];
  return (
    <motion.a
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex min-h-[470px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition duration-300 ease-out hover:shadow-xl ${hoverAccent}`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <span
          className={`rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${accent}`}
        >
          {product.label}
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600">
          {product.status === "Live" && (
            <span
              className="size-1.5 shrink-0 animate-pulse rounded-full bg-emerald-500"
              aria-hidden="true"
            />
          )}
          {product.status}
        </span>
      </div>
      <div className="relative mt-6 aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center gap-1 border-b border-slate-200 pb-2">
          <span className="size-1.5 rounded-full bg-slate-300" />
          <span className="size-1.5 rounded-full bg-slate-300" />
          <span className="ml-2 h-2 w-20 rounded bg-slate-200" />
        </div>
        <div className="absolute inset-x-3 bottom-3 top-9 overflow-hidden rounded-b-md bg-slate-100">
          <Image
            src={product.previewImage}
            alt={`${product.name} dashboard preview`}
            fill
            sizes="(max-width: 767px) 90vw, (max-width: 1279px) 30vw, 360px"
            className="object-cover object-top"
          />
        </div>
      </div>
      <div className="mt-auto pt-6">
        <div
          className={`mb-4 grid size-12 place-items-center rounded-xl text-sm font-extrabold text-white ${avatarAccent}`}
        >
          {product.initials}
        </div>
        <h3 className="text-2xl font-extrabold tracking-[-.05em]">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>
        <p className="mt-4 inline-flex rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700">
          {product.metric}
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm font-bold text-emerald-900">
          Visit product{" "}
          <ArrowUpRight
            size={16}
            className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.a>
  );
}
