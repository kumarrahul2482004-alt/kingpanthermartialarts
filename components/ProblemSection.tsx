import { problems } from "@/lib/data";

export function ProblemSection() {
  return (
    <section className="section-shell section-glow">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <span className="eyebrow">Why people start</span>
            <h2 className="section-title">Most people do not need more motivation. They need the right arena.</h2>
            <p className="section-copy">
              If your fitness routine feels stale or you have never learned practical self-defense, the right coaching
              environment can change everything.
            </p>
          </div>
          <div className="panel premium-border p-6">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-300">What visitors feel before they join</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-4xl font-black text-white">0</p>
                <p className="mt-2 text-sm text-slate-300">Clear structure in most ordinary workouts</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5">
                <p className="text-4xl font-black text-white">1</p>
                <p className="mt-2 text-sm text-slate-300">Decision that changes confidence, discipline, and fitness together</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <article key={problem.title} className="panel premium-border card-hover p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/12 text-red-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="number-pill">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-white">{problem.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{problem.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
