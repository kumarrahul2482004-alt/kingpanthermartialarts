import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { painPoints } from "@/app/lib/site-data";

export function ProblemsSection() {
  return (
    <section className="section-shell" aria-labelledby="problems-heading">
      <SectionHeading
        id="problems-heading"
        eyebrow="Pain Points"
        title="The operational bottlenecks slowing martial arts schools down"
        description="Many academies deliver great coaching but still lose momentum because leads, follow-ups, and internal systems depend too heavily on manual work."
      />
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {painPoints.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="card-hover h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-5 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <item.icon size={22} />
                </div>
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
