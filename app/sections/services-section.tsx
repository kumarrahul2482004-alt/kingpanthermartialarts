import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { services } from "@/app/lib/site-data";

export function ServicesSection() {
  return (
    <section id="programs" className="section-shell" aria-labelledby="services-heading">
      <SectionHeading
        id="services-heading"
        eyebrow="Programs & Services"
        title="Training programs for students and growth systems for dojo owners"
        description="King Panther blends athletic development, self-defense, discipline, and automation consulting into one premium brand experience."
      />
      <Container>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="card-hover flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-6 inline-flex rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <item.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                <div className="mt-auto pt-6 text-sm font-semibold text-cyan-200">Learn more →</div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
