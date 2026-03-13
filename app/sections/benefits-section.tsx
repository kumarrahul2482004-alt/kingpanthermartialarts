import { CheckCircle2 } from "lucide-react";
import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { benefits } from "@/app/lib/site-data";

export function BenefitsSection() {
  return (
    <section className="section-shell" aria-labelledby="benefits-heading">
      <SectionHeading
        id="benefits-heading"
        eyebrow="Benefits"
        title="Outcomes that matter for families, students, and school owners"
        description="Every message on the page is oriented around practical business and life outcomes, which keeps the value proposition clear and conversion-focused."
      />
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-white/[0.05] to-transparent p-8 shadow-soft">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                  <div className="mb-4 inline-flex rounded-full bg-emerald-400/10 p-2 text-emerald-300">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
