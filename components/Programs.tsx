import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/lib/data";

export function Programs() {
  return (
    <section id="programs" className="section-shell scroll-mt-28">
      <div className="container-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow">Programs</span>
            <h2 className="section-title">Choose the training path that matches your goals and lifestyle.</h2>
            <p className="section-copy">
              Whether you want to get fit, learn self-defense, or compete at a high level, there is a structured
              program waiting for you.
            </p>
          </div>
          <Link href="#contact" className="button-secondary">
            Talk to a Coach
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <article
                key={program.title}
                className={`panel premium-border card-hover flex h-full flex-col p-6 ${
                  index === 1 ? "bg-gradient-to-br from-red-500/12 via-white/[0.04] to-transparent" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/12 text-red-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-slate-300">
                    {index === 1 ? "Popular" : "Program"}
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-white">{program.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{program.description}</p>
                <div className="mt-5 h-px bg-gradient-to-r from-red-400/30 via-white/10 to-transparent" />
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center text-sm font-extrabold text-yellow-300 transition hover:text-yellow-200"
                >
                  {program.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
