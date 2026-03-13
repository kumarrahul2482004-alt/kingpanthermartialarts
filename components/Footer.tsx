import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import { contactDetails, navLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="container-shell grid gap-12 py-14 lg:grid-cols-[1.1fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-400/25 bg-red-500/15 text-lg font-extrabold text-red-300">
              KP
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-500">King Panther</p>
              <p className="text-xl font-extrabold text-white">Martial Arts Academy</p>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Professional martial arts training for beginners, families, and competitive fighters who want real skill,
            elite fitness, and disciplined growth.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/kingpantheracademy"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-red-400/35 hover:text-white"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/kingpantheracademy"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-red-400/35 hover:text-white"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@kingpantheracademy"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-red-400/35 hover:text-white"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-500">Quick links</p>
          <div className="mt-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-500">Contact</p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" />
              <span>{contactDetails.phone}</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow-300" />
              <span>{contactDetails.address}</span>
            </p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.hours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} King Panther Martial Arts Academy. All rights reserved.</p>
          <p>Built for speed, SEO, and conversions.</p>
        </div>
      </div>
    </footer>
  );
}
