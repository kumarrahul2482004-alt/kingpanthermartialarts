import { ShieldCheck, Star, Trophy } from "lucide-react";
import { stats } from "@/lib/data";

export function SocialProof() {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="panel overflow-hidden">
          <div className="grid gap-px bg-white/10 lg:grid-cols-[1.1fr_0.9fr]">
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
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  <ShieldCheck className="h-4 w-4 text-red-300" />
                  Certified instructors
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  <Trophy className="h-4 w-4 text-yellow-300" />
                  Competition-tested training
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                  <Star className="h-4 w-4 text-yellow-300" />
                  4.9 average member satisfaction
                </span>
              </div>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {stats.map((stat) => (
                <article key={stat.label} className="bg-slate-950/70 p-8">
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
