import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { caseStudies } from "@/app/lib/site-data";

export function CaseStudiesSection() {
  return (
    <section id="results" className="section-shell" aria-labelledby="case-studies-heading">
      <SectionHeading
        id="case-studies-heading"
        eyebrow="Case Studies"
        title="Results that turn operational improvements into growth"
        description="These snapshots combine CRO thinking, workflow automation, and academy-style positioning to show measurable business outcomes."
      />
      <Container>
        <div className="grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="card-hover h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <p className="inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                  {item.result}
                </p>
                <h3 className="mt-5 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
