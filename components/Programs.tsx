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
            <h2 className="section-title">Choose the training path that matches your goals.</h2>
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
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article key={program.title} className="panel card-hover flex h-full flex-col p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/12 text-red-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-extrabold text-white">{program.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{program.description}</p>
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
