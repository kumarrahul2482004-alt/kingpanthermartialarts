import { BenefitsGrid } from "@/components/storefront/benefits-grid";
import { CollectionGrid } from "@/components/storefront/collection-grid";
import { FaqAccordion } from "@/components/storefront/faq-accordion";
import { Footer } from "@/components/storefront/footer";
import { HeroSection } from "@/components/storefront/hero-section";
import { HowItWorks } from "@/components/storefront/how-it-works";
import { Navbar } from "@/components/storefront/navbar";
import { PainPoints } from "@/components/storefront/pain-points";
import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionIntro } from "@/components/storefront/section-intro";
import { SolutionSection } from "@/components/storefront/solution-section";
import { TestimonialsCarousel } from "@/components/storefront/testimonials-carousel";
import { TrustBar } from "@/components/storefront/trust-bar";
import { homeFaqs, products, siteContent, testimonials } from "@/lib/store-data";
import Link from "next/link";

export default function HomePage() {
  const bestsellers = products.filter((product) => product.isBestseller);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <PainPoints />
        <SolutionSection />
        <section className="section-shell">
          <div className="container-shell">
            <SectionIntro
              eyebrow="Featured Collections"
              title="Curated sarees for weddings, festivals, and everyday elegance"
              description="Browse thoughtfully styled collections built around the occasions that matter most, with premium drapes, hand-finished details, and statement palettes."
            />
            <CollectionGrid collections={siteContent.collections} />
          </div>
        </section>
        <section className="section-shell section-muted">
          <div className="container-shell space-y-10">
            <SectionIntro
              eyebrow="Social Proof"
              title="Trusted by women shopping for milestone moments"
              description="From wedding trousseaus to festive gifting, Vastra Veda is chosen for premium feel, reliable delivery, and designs that look even richer in person."
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {siteContent.stats.map((stat) => (
                <article key={stat.label} className="luxury-panel p-6 text-center">
                  <p className="font-display text-3xl text-ink-950">{stat.value}</p>
                  <p className="mt-2 text-sm text-ink-600">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-shell">
          <div className="container-shell">
            <SectionIntro
              eyebrow="Bestsellers"
              title="The sarees customers keep coming back for"
              description="High-converting product cards with clear pricing, visible reviews, limited stock signals, and quick paths into each product page."
            />
            <ProductGrid products={bestsellers} />
          </div>
        </section>
        <section className="section-shell section-accent">
          <div className="container-shell">
            <SectionIntro
              eyebrow="Testimonials"
              title="Loved for quality, fit, and premium presentation"
              description="Reviews mirror the buying confidence shoppers need right before they hit checkout."
            />
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </section>
        <HowItWorks />
        <BenefitsGrid benefits={siteContent.benefits} />
        <section className="section-shell">
          <div className="container-shell">
            <SectionIntro
              eyebrow="FAQ"
              title="Everything shoppers ask before placing an order"
              description="Clear answers reduce hesitation, lower pre-purchase friction, and help buyers feel comfortable ordering online."
            />
            <FaqAccordion items={homeFaqs} />
          </div>
        </section>
        <section className="section-shell">
          <div className="container-shell">
            <div className="cta-panel overflow-hidden rounded-[2rem] px-6 py-12 text-center sm:px-10 lg:px-16">
              <p className="eyebrow mx-auto">Final Call To Action</p>
              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                Upgrade Your Ethnic Wardrobe Today
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
                Discover premium sarees designed to feel celebratory the moment they arrive.
                Elegant drapes, gift-ready packaging, and limited festive stock available now.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link className="button-primary" href="/shop">
                  Shop Now
                </Link>
                <Link className="button-secondary border-white/30 bg-white/10 text-white" href="/about">
                  Discover The Brand
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
