import { problems } from "@/lib/data";

export function ProblemSection() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Why people start</span>
          <h2 className="section-title">Most people do not need more motivation. They need the right arena.</h2>
          <p className="section-copy">
            If your fitness routine feels stale or you have never learned practical self-defense, the right coaching
            environment can change everything.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <article key={problem.title} className="panel card-hover p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/12 text-red-300">
                  <Icon className="h-7 w-7" />
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
