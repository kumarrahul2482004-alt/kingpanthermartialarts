import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { solutions } from "@/app/lib/site-data";

export function SolutionSection() {
  return (
    <section id="automation" className="section-shell" aria-labelledby="solution-heading">
      <SectionHeading
        id="solution-heading"
        eyebrow="Solution"
        title="A martial arts academy experience backed by modern automation"
        description="We pair high-trust coaching with systems that help martial arts schools capture leads, nurture prospects, onboard students, and keep operations under control."
      />
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="card-hover h-full rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
