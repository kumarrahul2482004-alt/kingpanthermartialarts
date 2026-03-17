"use client";

import Link from "next/link";
import { Clock3, MapPin, Menu, Phone, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { contactDetails, navLinks } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="hidden border-b border-white/5 bg-white/[0.03] lg:block">
          <div className="container-shell flex min-h-11 items-center justify-between gap-6 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-5">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-red-300" />
                {contactDetails.address}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5 text-yellow-300" />
                {contactDetails.hours}
              </span>
            </div>
            <span className="inline-flex items-center gap-2 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />
              Free trial bookings open this week
            </span>
          </div>
        </div>

        <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="#home" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-400/25 bg-red-500/15 text-lg font-extrabold text-red-300">
            KP
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-slate-400">King Panther</p>
            <p className="text-base font-extrabold">Martial Arts Academy</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:9990262981"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-red-400/30 hover:text-white"
          >
            <Phone className="h-4 w-4 text-yellow-300" />
            9990262981
          </a>
          <Link href="#contact" className="button-primary">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Join Free Trial
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>

        {isOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
            <nav className="container-shell flex flex-col gap-2 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:9990262981"
                className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200"
              >
                Call 9990262981
              </a>
              <Link href="#contact" className="button-primary mt-2" onClick={() => setIsOpen(false)}>
                Join Free Trial
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <div className="fixed inset-x-4 bottom-4 z-40 lg:hidden">
        <div className="panel premium-border flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-red-300">Free Trial</p>
            <p className="text-sm font-bold text-white">Book your first class today</p>
          </div>
          <Link href="#contact" className="button-primary px-5 py-2.5 text-xs">
            Join Now
          </Link>
        </div>
      </div>
    </>
  );
}
