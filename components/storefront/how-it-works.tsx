const steps = [
  { title: "Browse", description: "Explore occasion-first collections and compare premium fabrics easily." },
  { title: "Select", description: "Choose your favorite drape with visible reviews, discounts, and details." },
  { title: "Order", description: "Checkout securely with UPI, cards, net banking, wallets, or COD." },
  { title: "Delivered", description: "Receive your saree quickly in beautiful packaging, ready to wear or gift." },
];

export function HowItWorks() {
  return (
    <section className="section-shell section-muted">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-5 text-3xl text-ink-900 sm:text-4xl">Browse → Select → Order → Delivered</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="luxury-panel p-6">
              <p className="font-display text-3xl text-brand-purple">0{index + 1}</p>
              <h3 className="mt-4 text-2xl text-ink-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-700">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
