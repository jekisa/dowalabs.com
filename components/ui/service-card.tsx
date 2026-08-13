import type { LucideIcon } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
      <div className="grid size-11 place-items-center rounded-lg bg-emerald-50 text-emerald-700 transition-colors duration-200 group-hover:bg-emerald-100">
        <Icon size={21} strokeWidth={1.8} />
      </div>
      <h2 className="mt-6 text-xl font-extrabold tracking-[-.04em] text-slate-950">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
