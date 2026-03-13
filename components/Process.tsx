import Link from "next/link";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">A simple path from first class to lasting transformation.</h2>
          <p className="section-copy">
            Clear next steps improve conversions. This section makes the decision to start feel easy, safe, and
            actionable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article key={step.title} className="panel card-hover p-6">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-red-300">Step {index + 1}</p>
              <h3 className="mt-4 text-2xl font-extrabold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link href="#contact" className="button-primary">
            Book Your Free Trial
          </Link>
        </div>
      </div>
    </section>
  );
}
