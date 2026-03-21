"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mt-10 space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="luxury-panel overflow-hidden">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-ink-900">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-brand-purple transition ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen ? <p className="px-6 pb-6 text-sm leading-7 text-ink-700">{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
