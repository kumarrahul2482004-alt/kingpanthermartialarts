import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { SectionHeading } from "@/app/components/section-heading";
import { partnerLogos, stats } from "@/app/lib/site-data";

export function SocialProofSection() {
  return (
    <section className="section-shell" aria-labelledby="social-proof-heading">
      <SectionHeading
        id="social-proof-heading"
        eyebrow="Social Proof"
        title="Trusted by students, parents, and growth-minded martial arts schools"
        description="Authority matters in both coaching and business systems. These trust signals reinforce the academy’s credibility while increasing conversion confidence."
        align="center"
      />
      <Container>
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-soft">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5">
                    <p className="text-4xl font-black text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-[1.5rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/10 to-transparent p-6">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Partner logos</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {partnerLogos.map((logo) => (
                    <div
                      key={logo}
                      className="flex min-h-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm font-semibold text-slate-200"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
