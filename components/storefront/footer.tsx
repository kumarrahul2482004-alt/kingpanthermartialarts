import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/85 py-10">
      <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-display text-3xl text-ink-900">Vastra Veda</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-ink-700">
            Premium sarees for weddings, festivities, and elegant everyday moments. Crafted
            for women who want tradition to feel luxurious, modern, and effortless.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700">Shop</p>
            <div className="mt-3 space-y-2 text-sm text-ink-700">
              <Link href="/shop" className="block hover:text-brand-purple">All Sarees</Link>
              <Link href="/shop#wedding-sarees" className="block hover:text-brand-purple">Wedding</Link>
              <Link href="/shop#festive-sarees" className="block hover:text-brand-purple">Festive</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700">Brand</p>
            <div className="mt-3 space-y-2 text-sm text-ink-700">
              <Link href="/about" className="block hover:text-brand-purple">About</Link>
              <Link href="/contact" className="block hover:text-brand-purple">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700">Follow</p>
            <div className="mt-3 space-y-2 text-sm text-ink-700">
              <a href="https://instagram.com" className="block hover:text-brand-purple">Instagram</a>
              <a href="https://facebook.com" className="block hover:text-brand-purple">Facebook</a>
              <a href="https://pinterest.com" className="block hover:text-brand-purple">Pinterest</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
