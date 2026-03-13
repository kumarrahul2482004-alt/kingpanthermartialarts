import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";

export function FinalCTASection() {
  return (
    <section className="section-shell" aria-labelledby="final-cta-heading">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-slate-900 to-slate-950 p-8 shadow-glow sm:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_35%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="pill">Ready To Grow</p>
                <h2 id="final-cta-heading" className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Ready to Train Like a Champion and Run Your Dojo Smarter?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                  Book a free trial class, schedule an automation demo, and see how King Panther helps people train
                  harder while schools operate with more precision and less admin drag.
                </p>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  Limited onboarding slots each month for new automation clients
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="#contact" className="button-primary gap-2">
                  Book Free Trial Class
                  <ArrowRight size={16} />
                </Link>
                <Link href="#contact" className="button-secondary">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
