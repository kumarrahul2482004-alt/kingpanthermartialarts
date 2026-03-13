import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { testimonials } from "@/app/lib/site-data";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-shell" aria-labelledby="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Testimonials"
        title="Real voices from students, parents, and school owners"
        description="Strong testimonials reduce decision friction and help visitors see themselves in the next step, whether they want training or systems support."
      />
      <Container>
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <article className="card-hover h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-lg font-black text-cyan-100">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm text-cyan-200">{item.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">&ldquo;{item.quote}&rdquo;</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
