import Image from "next/image";
import Link from "next/link";

type Collection = {
  name: string;
  description: string;
  href: string;
  image: string;
};

export function CollectionGrid({ collections }: { collections: Collection[] }) {
  return (
    <div id="collections" className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {collections.map((collection) => (
        <article
          key={collection.name}
          className="group luxury-panel overflow-hidden border border-white/90 transition hover:-translate-y-1"
        >
          <div className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-amber-50 p-3">
            <div className="absolute inset-x-8 top-6 h-20 rounded-full bg-brand-pink/20 blur-3xl" />
            <Image
              src={collection.image}
              alt={collection.name}
              width={640}
              height={420}
              className="h-64 w-full rounded-[1.35rem] object-cover object-center shadow-[0_18px_48px_rgba(34,22,58,0.12)] transition duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: "center 42%" }}
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 h-24 rounded-b-[1.35rem] bg-gradient-to-t from-white/25 to-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl text-ink-900">{collection.name}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-700">{collection.description}</p>
            <Link href={collection.href} className="mt-5 inline-flex text-sm font-semibold text-brand-purple">
              Explore collection
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
