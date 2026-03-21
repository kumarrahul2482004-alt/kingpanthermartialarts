"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="section-shell scroll-mt-28">
      <div className="container-shell">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">What students say after they step onto the mat.</h2>
            <p className="section-copy">
              The strongest social proof comes from people who started exactly where your next lead is starting today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-red-400/35 hover:bg-white/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-red-400/35 hover:bg-white/10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <article className="panel premium-border relative min-h-[320px] overflow-hidden p-8 sm:p-10" aria-live="polite">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" aria-hidden="true" />
            <Quote className="h-10 w-10 text-red-300" />
            <p className="mt-6 max-w-3xl text-2xl font-bold leading-relaxed text-white sm:text-3xl">
              {testimonials[activeIndex].quote}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10">
                <Image src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} fill className="object-cover" sizes="56px" />
              </div>
              <div>
                <p className="text-lg font-extrabold text-white">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-slate-400">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2" aria-label="Select testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeIndex ? "w-8 bg-red-300" : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Show testimonial from ${testimonial.name}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>
          </article>

          <div className="grid gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`panel premium-border p-5 text-left transition ${
                  index === activeIndex ? "border-red-400/40 bg-red-500/10 shadow-glow" : "border-white/10 bg-white/[0.04]"
                }`}
                aria-pressed={index === activeIndex}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <p className="font-extrabold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">{testimonial.quote}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
