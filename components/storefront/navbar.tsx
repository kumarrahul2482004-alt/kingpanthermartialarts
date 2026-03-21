"use client";

import Link from "next/link";
import { Menu, ShoppingBag, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple text-white shadow-button sm:h-11 sm:w-11">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl text-ink-900 sm:text-2xl">Vastra Veda</span>
            <span className="hidden text-[11px] uppercase tracking-[0.22em] text-ink-700 sm:block">
              Modern Luxury Sarees
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 hover:text-brand-purple"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 lg:inline-flex">
            Festive Sale Live
          </span>
          <Link
            href="/shop"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white text-ink-900 shadow-soft hover:border-purple-300 hover:text-brand-purple sm:h-11 sm:w-11"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white text-ink-900 shadow-soft md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-purple-100 bg-white/95 md:hidden">
          <nav className="container-shell flex flex-col gap-2 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-ink-800 hover:bg-purple-50 hover:text-brand-purple"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                Festive Sale Live
              </span>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
