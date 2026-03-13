import { faqs } from "@/lib/data";

export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-shell scroll-mt-28">
      <div className="container-shell">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Everything people ask before they commit to training.</h2>
          <p className="section-copy">
            Clear answers reduce hesitation and help visitors move from interest to booked trial class faster.
          </p>
        </div>

        <div className="mt-12 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="panel group p-6">
              <summary className="cursor-pointer list-none text-lg font-extrabold text-white">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-red-300 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
