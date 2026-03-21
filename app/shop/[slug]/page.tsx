import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/storefront/footer";
import { Navbar } from "@/components/storefront/navbar";
import { ProductGrid } from "@/components/storefront/product-grid";
import { formatPrice, getProductBySlug, getProductMeta, products } from "@/lib/store-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/shop/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Vastra Veda`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const meta = getProductMeta(product);
  const relatedProducts = products
    .filter((item) => item.collection === product.collection && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="section-shell">
        <div className="container-shell">
          <div className="mb-6 flex items-center gap-2 text-sm text-ink-700">
            <Link href="/" className="hover:text-brand-purple">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-brand-purple">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <section className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
            <div className="luxury-panel overflow-hidden p-3">
              <Image
                src={product.image}
                alt={product.name}
                width={900}
                height={1080}
                priority
                style={{ objectPosition: product.imagePosition ?? "center 44%" }}
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div>
              <p className="eyebrow">{product.collection}</p>
              <h1 className="mt-5 text-4xl text-ink-900 sm:text-5xl">{product.name}</h1>
              <p className="mt-4 text-base leading-7 text-ink-700 sm:text-lg">{product.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {product.badge ? <span className="price-chip">{product.badge}</span> : null}
                {product.limitedStock ? (
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">
                    Limited stock left
                  </span>
                ) : null}
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-700 shadow-soft">
                  {product.rating} Star rating
                </span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="text-3xl font-semibold text-ink-900">{formatPrice(product.price)}</span>
                <span className="text-lg text-ink-700 line-through">{formatPrice(product.originalPrice)}</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Fabric</p>
                  <p className="mt-2 font-semibold text-ink-900">{product.fabric}</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Color</p>
                  <p className="mt-2 font-semibold text-ink-900">{product.color}</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Reviews</p>
                  <p className="mt-2 font-semibold text-ink-900">{product.reviews}+ verified buyers</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Best For</p>
                  <p className="mt-2 font-semibold text-ink-900">{meta.occasion}</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Drape Feel</p>
                  <p className="mt-2 font-semibold text-ink-900">{meta.drapeFeel}</p>
                </div>
                <div className="glass-card p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Blouse</p>
                  <p className="mt-2 font-semibold text-ink-900">{meta.blouse}</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {product.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-soft">
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-gold" />
                    <p className="text-sm text-ink-700">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-primary">
                  Buy Now
                </Link>
                <Link href="/contact" className="button-secondary">
                  Ask A Stylist
                </Link>
              </div>

              <div className="mt-8 luxury-panel p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700">Order Details</p>
                <div className="mt-3 grid gap-3 text-sm leading-7 text-ink-700 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-soft">
                    <p className="font-semibold text-ink-900">Dispatch</p>
                    <p>{meta.dispatch}</p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-soft">
                    <p className="font-semibold text-ink-900">Returns</p>
                    <p>{meta.returns}</p>
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-soft sm:col-span-2">
                    <p className="font-semibold text-ink-900">Checkout Support</p>
                    <p>Secure checkout, cash on delivery for eligible locations, and stylist assistance before ordering.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {relatedProducts.length > 0 ? (
            <section className="mt-16">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow">Related Styles</p>
                  <h2 className="mt-4 text-3xl text-ink-900">More from {product.collection}</h2>
                </div>
              </div>
              <ProductGrid products={relatedProducts} />
            </section>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
