import Image from "next/image";

const notes = [
  "Hand-finished edges",
  "Soft premium fall",
  "Celebration-ready styling",
];

export function SolutionSection() {
  return (
    <section className="section-shell section-accent">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="luxury-panel relative overflow-hidden p-3">
          <div className="absolute inset-x-10 top-8 h-24 rounded-full bg-brand-pink/30 blur-3xl" />
          <div className="absolute inset-x-14 bottom-10 h-20 rounded-full bg-brand-purple/10 blur-3xl" />
          <Image
            src="/images/saree-hero.jpg"
            alt="Premium saree craftsmanship showcase"
            width={667}
            height={1000}
            style={{ objectPosition: "center 52%" }}
            className="h-[580px] w-full rounded-[1.65rem] object-cover shadow-[0_32px_80px_rgba(34,22,58,0.16)]"
          />
          <div className="pointer-events-none absolute inset-x-3 bottom-3 h-36 rounded-b-[1.65rem] bg-gradient-to-t from-white/22 to-transparent" />

          <div className="absolute left-7 top-7 rounded-[1.4rem] border border-white/70 bg-white/88 p-5 backdrop-blur-md shadow-soft">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-700">
              Premium Fabric Notes
            </p>
            <div className="mt-3 space-y-2">
              {notes.map((note) => (
                <div key={note} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-gold" />
                  <p className="text-sm text-ink-700">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-7 right-7 rounded-[1.4rem] border border-white/70 bg-white/90 px-5 py-4 backdrop-blur-md shadow-soft">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-700">
              Curated Luxury
            </p>
            <p className="mt-2 text-lg font-semibold text-ink-900">Wedding to festive edits</p>
            <p className="mt-1 text-sm text-ink-700">Crafted to look refined online and in person.</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">The Solution</p>
          <h2 className="mt-5 text-3xl text-ink-900 sm:text-4xl lg:text-5xl">
            Premium craftsmanship, refined fabrics, and curated designs in one trusted brand
          </h2>
          <p className="mt-5 text-base leading-7 text-ink-700 sm:text-lg">
            Vastra Veda blends culturally rich detailing with modern luxury styling so shoppers
            can buy for weddings, festivals, and gifting with complete confidence.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="glass-card p-5">
              <p className="font-display text-2xl text-ink-900">01</p>
              <p className="mt-3 font-semibold text-ink-900">Craftsmanship First</p>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                Drapes chosen for texture, finish, and celebration-ready appeal.
              </p>
            </div>
            <div className="glass-card p-5">
              <p className="font-display text-2xl text-ink-900">02</p>
              <p className="mt-3 font-semibold text-ink-900">Curated Collections</p>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                Occasion-led assortments reduce choice overload and improve confidence.
              </p>
            </div>
            <div className="glass-card p-5">
              <p className="font-display text-2xl text-ink-900">03</p>
              <p className="mt-3 font-semibold text-ink-900">Reliable Delivery</p>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                Fast dispatch, clear policy details, and trust-building support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
