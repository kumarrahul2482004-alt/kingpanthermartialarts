"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = testimonials[activeIndex];

  function cycle(direction: "prev" | "next") {
    setActiveIndex((value) => {
      if (direction === "prev") {
        return value === 0 ? testimonials.length - 1 : value - 1;
      }

      return value === testimonials.length - 1 ? 0 : value + 1;
    });
  }

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="luxury-panel p-6 sm:p-8">
        <p className="eyebrow">Verified Reviews</p>
        <blockquote className="mt-6 text-2xl leading-10 text-ink-900 sm:text-3xl">
          “{current.quote}”
        </blockquote>
        <div className="mt-6 flex items-center gap-2">
          {Array.from({ length: current.rating }).map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="mt-5 text-lg font-semibold text-ink-900">{current.name}</p>
        <p className="text-sm text-ink-700">{current.location}</p>
        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={() => cycle("prev")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white text-ink-900 hover:border-purple-300 hover:text-brand-purple"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => cycle("next")}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white text-ink-900 hover:border-purple-300 hover:text-brand-purple"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="grid gap-4">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`rounded-[1.5rem] border p-5 text-left shadow-soft transition ${
              activeIndex === index
                ? "border-brand-purple bg-white"
                : "border-white/80 bg-white/75 hover:border-purple-200"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-ink-900">{testimonial.name}</p>
                <p className="text-sm text-ink-700">{testimonial.location}</p>
              </div>
              <p className="text-sm font-semibold text-amber-600">{testimonial.rating}.0★</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-700">{testimonial.quote}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
