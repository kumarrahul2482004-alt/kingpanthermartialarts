import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Trophy, Users } from "lucide-react";
import { stats } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="panel premium-border overflow-hidden">
          <div className="grid gap-px bg-white/10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="bg-slate-950/85 p-8 sm:p-10">
              <span className="eyebrow">Social proof</span>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                Trusted by families, first-timers, and serious fighters.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Students stay because they feel the difference quickly: sharper coaching, stronger accountability,
                better technique, and a culture built on respect.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="stat-chip">
                  <ShieldCheck className="h-4 w-4 text-red-300" />
                  Certified instructors
                </span>
                <span className="stat-chip">
                  <Trophy className="h-4 w-4 text-yellow-300" />
                  Competition-tested training
                </span>
                <span className="stat-chip">
                  <Star className="h-4 w-4 text-yellow-300" />
                  4.9 average member satisfaction
                </span>
                <span className="stat-chip">
                  <Users className="h-4 w-4 text-red-300" />
                  Beginner and family friendly
                </span>
              </div>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-yellow-300">Why parents and adults stay</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  The academy blends disciplined coaching with a welcoming environment, so first-timers feel safe
                  starting and serious students feel challenged enough to grow.
                </p>
                <Link
                  href="#testimonials"
                  className="mt-5 inline-flex items-center text-sm font-extrabold text-white transition hover:text-yellow-200"
                >
                  Read student stories
                  <ArrowRight className="ml-2 h-4 w-4 text-yellow-300" />
                </Link>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {stats.map((stat) => (
                <article key={stat.label} className="bg-slate-950/70 p-8 transition hover:bg-slate-950/90">
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
