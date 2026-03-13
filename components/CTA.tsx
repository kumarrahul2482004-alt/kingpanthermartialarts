import Link from "next/link";
import { Clock3, ShieldCheck } from "lucide-react";
import { contactDetails } from "@/lib/data";

export function CTA() {
  return (
    <section className="section-shell pb-24">
      <div className="container-shell">
        <div className="panel relative overflow-hidden rounded-[36px] border border-red-400/20 bg-gradient-to-br from-red-500/18 via-slate-950 to-slate-950 p-8 sm:p-10 lg:p-14">
          <div className="absolute -right-12 top-0 h-56 w-56 rounded-full bg-red-500/15 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div className="space-y-5">
              <span className="eyebrow">Final call to action</span>
              <h2 className="text-4xl font-black text-white sm:text-5xl">Start Your Martial Arts Journey Today</h2>
              <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                Free trial slots are limited each week so every new student gets personal attention. Claim your class,
                meet the coaches, and see exactly how fast the right training can change your mindset and fitness.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <Clock3 className="h-4 w-4 text-yellow-300" />
                  Limited intro slots this week
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                  <ShieldCheck className="h-4 w-4 text-yellow-300" />
                  Beginner-safe onboarding
                </span>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-300">Ready to begin?</p>
              <p className="mt-3 text-2xl font-extrabold text-white">Join Free Trial Class</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Call {contactDetails.phone}, email {contactDetails.email}, or reserve below.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="#contact" className="button-primary w-full">
                  Join Free Trial Class
                </Link>
                <Link href="#programs" className="button-secondary w-full">
                  Compare Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
