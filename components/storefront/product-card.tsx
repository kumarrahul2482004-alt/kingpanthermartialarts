import Image from "next/image";
import Link from "next/link";
import { Eye, Star } from "lucide-react";
import { Product, formatPrice, getProductMeta } from "@/lib/store-data";

export function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const detailPreview = product.highlights.slice(0, 2);
  const meta = getProductMeta(product);

  return (
    <article className="group luxury-panel overflow-hidden border border-white/90 bg-white/90">
      <div className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-amber-50 p-3">
        <div className="absolute inset-x-10 top-6 h-24 rounded-full bg-brand-pink/25 blur-3xl" />
        <div className="absolute inset-x-8 bottom-4 h-20 rounded-full bg-brand-purple/10 blur-3xl" />
        <Image
          src={product.image}
          alt={product.name}
          width={720}
          height={840}
          style={{ objectPosition: product.imagePosition ?? "center 44%" }}
          className="relative h-[300px] w-full rounded-[1.4rem] object-cover shadow-[0_20px_60px_rgba(34,22,58,0.14)] transition duration-500 group-hover:scale-[1.035] sm:h-[360px]"
        />
        <div className="pointer-events-none absolute inset-x-3 bottom-3 h-28 rounded-b-[1.4rem] bg-gradient-to-t from-white/30 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.badge ? <span className="price-chip">{product.badge}</span> : null}
          {product.limitedStock ? (
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">
              Limited stock
            </span>
          ) : null}
        </div>
        <div className="absolute left-6 bottom-6 rounded-full border border-white/70 bg-white/88 px-4 py-2 backdrop-blur-sm shadow-soft">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-700">
            Studio Saree Edit
          </p>
        </div>
        <Link
          href={`/shop/${product.slug}`}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-ink-900 shadow-soft transition md:opacity-0 md:group-hover:opacity-100"
        >
          <Eye className="h-4 w-4" />
          Quick View
        </Link>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-ink-700">{product.collection}</p>
        <h3 className="mt-2 text-2xl text-ink-900">
          <Link href={`/shop/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="mt-3 flex items-center gap-2 text-sm text-ink-700">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span>{product.rating}</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-700">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
            {product.fabric}
          </span>
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-700">
            {product.color}
          </span>
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            {meta.drapeFeel}
          </span>
        </div>
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-amber-50 to-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-700">
            Detail Description
          </p>
          <div className="mt-2 space-y-2">
            {detailPreview.map((detail) => (
              <div key={detail} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                <p className="text-sm leading-6 text-ink-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-2 text-sm text-ink-700">
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-soft">
            <span>Best For</span>
            <span className="font-medium text-ink-900">{meta.occasion}</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-soft">
            <span>Dispatch</span>
            <span className="font-medium text-ink-900">48 hrs</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="text-xl font-semibold text-ink-900">{formatPrice(product.price)}</span>
          <span className="text-sm text-ink-700 line-through">{formatPrice(product.originalPrice)}</span>
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {discount}% off
          </span>
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href={`/shop/${product.slug}`} className="button-primary flex-1">
            Buy Now
          </Link>
          <Link href={`/shop/${product.slug}`} className="button-secondary flex-1">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
