import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/storefront/footer";
import { Navbar } from "@/components/storefront/navbar";

export const metadata: Metadata = {
  title: "About The Brand",
  description:
    "Learn about Vastra Veda, a modern luxury saree brand focused on premium fabrics, curated collections, and culturally rich design.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell">
        <div className="container-shell space-y-14">
          <section className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="eyebrow">About Vastra Veda</p>
              <h1 className="mt-5 text-4xl text-ink-900 sm:text-5xl">
                A saree brand built for modern celebrations and timeless dressing
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-700 sm:text-lg">
                Vastra Veda was created for women who want premium ethnic wear to feel elegant,
                reliable, and elevated from first click to final drape. Our edits combine rich
                Indian craft inspiration with softer, wearable modern styling.
              </p>
            </div>
            <div className="luxury-panel overflow-hidden p-3">
              <Image
                src="/images/about-brand-story.svg"
                alt="About the saree brand"
                width={760}
                height={620}
                className="h-auto w-full rounded-[1.5rem]"
              />
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            <article className="glass-card p-6">
              <h2 className="text-2xl text-ink-900">Craft</h2>
              <p className="mt-3 text-sm leading-7 text-ink-700">
                Every collection starts with texture, drape, and finish so each saree feels
                premium the moment it arrives.
              </p>
            </article>
            <article className="glass-card p-6">
              <h2 className="text-2xl text-ink-900">Curation</h2>
              <p className="mt-3 text-sm leading-7 text-ink-700">
                We edit for weddings, festive wardrobes, and elegant everyday dressing instead
                of overwhelming shoppers with endless options.
              </p>
            </article>
            <article className="glass-card p-6">
              <h2 className="text-2xl text-ink-900">Confidence</h2>
              <p className="mt-3 text-sm leading-7 text-ink-700">
                Transparent product details, visible trust signals, and responsive support help
                customers shop important occasions with ease.
              </p>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
