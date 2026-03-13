import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { processSteps } from "@/app/lib/site-data";

export function ProcessSection() {
  return (
    <section className="section-shell" aria-labelledby="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="How It Works"
        title="A simple process that supports both training and business growth"
        description="The flow is intentionally easy to understand so visitors can quickly see how joining, automation, and ongoing growth fit together."
      />
      <Container>
        <div className="grid gap-5 lg:grid-cols-5">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-6 text-sm font-black uppercase tracking-[0.22em] text-cyan-200">{item.step}</div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
