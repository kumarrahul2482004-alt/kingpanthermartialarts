import { caseStudies } from "@/lib/data";

export function CaseStudies() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">Results</span>
          <h2 className="section-title">Real student transformations, not just promises.</h2>
          <p className="section-copy">
            Our case studies show what happens when elite coaching meets consistent effort and a clear progression
            system.
          </p>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.name} className="panel card-hover flex h-full flex-col p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-red-300">Student Transformation</p>
              <h3 className="mt-4 text-2xl font-extrabold text-white">{study.name}</h3>
              <p className="mt-3 text-base font-semibold text-yellow-300">{study.result}</p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Before</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{study.before}</p>
                </div>
                <div className="rounded-3xl border border-red-400/20 bg-red-500/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-200">After</p>
                  <p className="mt-2 text-sm leading-7 text-slate-100">{study.after}</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-400">{study.story}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
