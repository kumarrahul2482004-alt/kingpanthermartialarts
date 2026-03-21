const painPoints = [
  "Struggling to find premium sarees online?",
  "Low-quality fabrics, poor designs, delayed delivery?",
];

export function PainPoints() {
  return (
    <section className="section-shell">
      <div className="container-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">The Problem</p>
          <h2 className="mt-5 text-3xl text-ink-900 sm:text-4xl">
            Saree shopping online should feel exciting, not risky
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink-700">
            Many shoppers are forced to choose between mediocre fabric quality, inconsistent
            finishing, and unreliable delivery just to get a festive look on time.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((point) => (
            <article key={point} className="luxury-panel p-6">
              <p className="text-lg font-semibold text-ink-900">{point}</p>
              <p className="mt-3 text-sm leading-6 text-ink-700">
                We designed the shopping journey to remove that uncertainty with better fabrics,
                curated edits, and transparent delivery expectations.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
