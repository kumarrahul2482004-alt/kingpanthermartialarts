import type { Metadata } from "next";
import { Footer } from "@/components/storefront/footer";
import { Navbar } from "@/components/storefront/navbar";
import { ProductGrid } from "@/components/storefront/product-grid";
import { products, siteContent, slugifyCollection } from "@/lib/store-data";

export const metadata: Metadata = {
  title: "Shop Premium Sarees",
  description:
    "Browse wedding, festive, Banarasi, Kashmiri, Kanjivaram, organza, linen, and elegant everyday sarees with premium fabrics and luxury styling.",
  alternates: {
    canonical: "/shop",
  },
};

const collections = siteContent.collections.filter((collection) =>
  products.some((product) => product.collection === collection.name),
);

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell">
        <div className="container-shell">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-5 text-4xl text-ink-900 sm:text-5xl">A premium saree edit for every celebration</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink-700 sm:text-lg">
            Explore bestselling drapes, Banarasi classics, Kashmiri-inspired elegance,
            Kanjivaram ceremony styles, organza favorites, linen essentials, and timeless silhouettes.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {collections.map((collection) => (
              <a
                key={collection.name}
                href={`#${slugifyCollection(collection.name)}`}
                className="rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 hover:border-purple-300 hover:text-brand-purple"
              >
                {collection.name}
              </a>
            ))}
          </div>

          <div className="mt-12 space-y-14">
            {collections.map((collection) => {
              const items = products.filter((product) => product.collection === collection.name);

              return (
                <section key={collection.name} id={slugifyCollection(collection.name)}>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h2 className="text-3xl text-ink-900">{collection.name}</h2>
                      <p className="mt-2 text-sm text-ink-700">{collection.description}</p>
                    </div>
                    <p className="price-chip">{items.length} styles available</p>
                  </div>
                  <ProductGrid products={items} />
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
