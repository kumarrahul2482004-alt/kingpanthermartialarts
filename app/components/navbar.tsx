"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/app/components/container";
import { Logo } from "@/app/components/logo";
import { navLinks } from "@/app/lib/site-data";
import { cn } from "@/app/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition duration-300", scrolled ? "py-3" : "py-5")}>
      <Container>
        <nav
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6",
            scrolled
              ? "border-cyan-300/20 bg-slate-950/80 shadow-glow backdrop-blur-xl"
              : "border-white/10 bg-slate-950/45 backdrop-blur-lg",
          )}
          aria-label="Primary navigation"
        >
          <Link href="#home" aria-label="King Panther Martial Arts Academy home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="#contact" className="button-primary hidden lg:inline-flex">
            Book Trial
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open ? (
          <div
            id="mobile-menu"
            className="mt-3 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-soft backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#contact" className="button-primary mt-2" onClick={() => setOpen(false)}>
                Book Trial
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
