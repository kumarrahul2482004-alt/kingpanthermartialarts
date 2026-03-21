import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Truck } from "lucide-react";

const proofPoints = [
  "Premium fabric curation",
  "Trusted by 10,000+ shoppers",
  "COD and easy returns",
];

export function HeroSection() {
  return (
    <section className="section-shell pb-10 pt-8 sm:pt-12">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Luxury Saree Boutique</p>
          <h1 className="mt-6 max-w-3xl text-5xl leading-tight text-ink-900 sm:text-6xl lg:text-7xl">
            Timeless Elegance in Every Saree
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700 sm:text-xl">
            Discover handcrafted sarees designed for every celebration, from wedding
            mornings to festive evenings and elevated everyday style.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link className="button-primary" href="/shop">
              Shop Now
            </Link>
            <Link className="button-secondary" href="/shop#collections">
              Explore Collection
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {proofPoints.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm text-ink-700 shadow-soft"
              >
                <CheckCircle2 className="h-4 w-4 text-brand-purple" />
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="luxury-panel p-4">
              <ShieldCheck className="h-5 w-5 text-brand-purple" />
              <p className="mt-3 text-sm font-semibold text-ink-900">Secure Checkout</p>
              <p className="mt-1 text-sm text-ink-700">Safe payments with trusted gateways.</p>
            </div>
            <div className="luxury-panel p-4">
              <Truck className="h-5 w-5 text-brand-purple" />
              <p className="mt-3 text-sm font-semibold text-ink-900">Fast Delivery</p>
              <p className="mt-1 text-sm text-ink-700">Quick dispatch for ready-to-ship styles.</p>
            </div>
            <div className="luxury-panel p-4">
              <CheckCircle2 className="h-5 w-5 text-brand-purple" />
              <p className="mt-3 text-sm font-semibold text-ink-900">Premium Packaging</p>
              <p className="mt-1 text-sm text-ink-700">Arrives celebration-ready and gift-worthy.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 hidden rounded-full bg-white/90 px-4 py-3 text-sm font-semibold text-ink-900 shadow-soft sm:block">
            4.8 Star Rated by premium buyers
          </div>
          <div className="absolute -bottom-6 right-5 z-10 rounded-[1.5rem] bg-white px-5 py-4 shadow-soft">
            <p className="price-chip">Limited festive stock</p>
            <p className="mt-3 text-sm text-ink-700">Bestsellers moving fast this week</p>
          </div>
          <div className="luxury-panel relative overflow-hidden p-3">
            <div className="absolute inset-x-8 top-6 h-28 rounded-full bg-brand-pink/40 blur-3xl" />
            <div className="absolute inset-x-10 bottom-8 h-24 rounded-full bg-brand-purple/12 blur-3xl" />
            <Image
              src="/images/saree-hero.jpg"
              alt="Premium silk saree editorial showcase"
              width={667}
              height={1000}
              priority
              style={{ objectPosition: "center 42%" }}
              className="relative h-auto w-full rounded-[1.5rem] object-cover shadow-[0_32px_80px_rgba(34,22,58,0.18)]"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 h-36 rounded-b-[1.5rem] bg-gradient-to-t from-white/18 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
