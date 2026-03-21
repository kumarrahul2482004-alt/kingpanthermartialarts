type Benefit = {
  title: string;
  description: string;
};

export function BenefitsGrid({ benefits }: { benefits: Benefit[] }) {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Why Shoppers Choose Us</p>
          <h2 className="mt-5 text-3xl text-ink-900 sm:text-4xl">Benefits that reduce hesitation and increase confidence</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="glass-card p-6">
              <h3 className="text-2xl text-ink-900">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-700">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
