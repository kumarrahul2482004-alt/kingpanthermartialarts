import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";
import { heroHighlights, heroMetrics, heroProof, partnerLogos, trustBadges, visualFeatureChips } from "@/app/lib/site-data";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-grid hero-grid opacity-[0.08]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[130px]" />
      <Container>
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <Reveal className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span key={badge} className="pill">
                  <CheckCircle2 size={16} />
                  {badge}
                </span>
              ))}
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Train Like a Champion. <span className="text-gradient">Run Your Dojo on Autopilot.</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Elite martial arts training for students and a modern automation engine for school owners who want
                faster follow-up, cleaner operations, and more consistent growth.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="#contact" className="button-primary mask-shine gap-2">
                Book Free Trial Class
                <ArrowRight size={16} />
              </Link>
              <Link href="#automation" className="button-secondary gap-2">
                <PlayCircle size={16} />
                See How Automation Works
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-slate-400">
              <span className="font-semibold uppercase tracking-[0.22em] text-slate-500">Trusted workflow stack</span>
              {partnerLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative" delay={120}>
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-300/10 via-transparent to-sky-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/70 p-5 shadow-soft backdrop-blur-xl">
              <div className="grid gap-5">
                <div className="glass-panel rounded-[1.75rem] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Automation cockpit</p>
                      <p className="mt-2 text-2xl font-bold text-white">Lead-to-enrollment workflow</p>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                      Live
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {heroMetrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                        <p className="text-3xl font-black text-white">{metric.value}</p>
                        <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="glass-panel rounded-[1.75rem] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Workflow stack</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {visualFeatureChips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel rounded-[1.75rem] p-5">
                    <div className="space-y-4">
                      {heroProof.map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/75 p-4">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                              <item.icon size={18} />
                            </div>
                            <div>
                              <p className="font-semibold text-white">{item.title}</p>
                              <p className="mt-1 text-sm leading-6 text-slate-300">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
