import { CheckCircle2 } from "lucide-react";
import { solutions, trainerHighlights } from "@/lib/data";

export function SolutionSection() {
  return (
    <section id="trainers" className="section-shell scroll-mt-28">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <span className="eyebrow">How we solve it</span>
            <h2 className="section-title">A complete academy system built for strength, skill, and discipline.</h2>
            <p className="section-copy">
              Every class combines technical coaching, progressive structure, and mindset training so students keep
              improving instead of stalling out.
            </p>

            <div className="mt-8 grid gap-4">
              {solutions.map((solution) => {
                const Icon = solution.icon;

                return (
                  <div key={solution.title} className="panel flex gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-white">{solution.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{solution.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="panel p-7 sm:p-8">
            <div>
              <span className="eyebrow">Meet the trainers</span>
              <h3 className="mt-4 text-3xl font-black text-white">Coaches who teach with authority and intention.</h3>
            </div>

            <div className="mt-8 space-y-4">
              {trainerHighlights.map((trainer) => (
                <article key={trainer.name} className="rounded-[24px] border border-white/10 bg-slate-900/60 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-extrabold text-white">{trainer.name}</h4>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-red-300">{trainer.role}</p>
                    </div>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{trainer.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
