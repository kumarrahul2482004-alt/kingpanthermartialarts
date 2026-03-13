import { benefits } from "@/lib/data";

export function Benefits() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <span className="eyebrow">Benefits</span>
            <h2 className="section-title">Train for more than fitness. Train for who you become.</h2>
            <p className="section-copy">
              A high-converting academy site should sell the outcome, not just the schedule. These benefits tie
              directly to what prospects want most.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.title} className="panel card-hover p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-300/10 text-yellow-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
