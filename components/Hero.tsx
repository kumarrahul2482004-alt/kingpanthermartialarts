"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useState } from "react";
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { contactDetails, trustBadges } from "@/lib/data";

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/r8802746909@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden pb-14 pt-10 sm:pb-20">
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-500/12 to-transparent" aria-hidden="true" />
      <div className="absolute left-[6%] top-24 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[8%] top-40 h-52 w-52 rounded-full bg-yellow-300/10 blur-3xl" aria-hidden="true" />
      <div className="container-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <span className="eyebrow">
              <Star className="h-4 w-4" />
              Elite martial arts training for all levels
            </span>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.96] text-white sm:text-6xl lg:text-7xl">
                Unleash the <span className="text-highlight">Fighter Within</span>
              </h1>
              <p className="section-copy max-w-2xl text-lg sm:text-xl">
                Train with elite martial arts coaches and transform your strength, confidence, and discipline.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#contact" className="button-primary">
                Join a Free Trial Class
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#programs" className="button-secondary">
                View Programs
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                >
                  <BadgeCheck className="h-4 w-4 text-yellow-300" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-3">
              {[
                "Morning and evening batches for working professionals and students",
                "Structured beginner onboarding with coach-led progression",
                "Real self-defense and athletic training in one system",
              ].map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-300" />
                  <p className="text-sm leading-6 text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-red-500/20 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-yellow-300/10 blur-3xl" aria-hidden="true" />

            <div className="panel overflow-hidden rounded-[32px] border border-white/10">
              <div className="relative aspect-[4/4.6]">
                <Image
                  src="/images/hero-training.svg"
                  alt="King Panther martial arts training session"
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
              </div>

              <section id="contact" className="relative scroll-mt-28 border-t border-white/10 bg-slate-950/95 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-white">Claim Your Free Trial</h2>
                    <p className="text-sm text-slate-400">Spots for this week are filling fast.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
                  <input type="hidden" name="_subject" value="New Free Trial Class Lead - King Panther Academy" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
                  <input id="trial-name" type="text" name="name" placeholder="Your name" className="field" autoComplete="name" required />
                  <input id="trial-email" type="email" name="email" placeholder="Email address" className="field" autoComplete="email" required />
                  <input
                    id="trial-phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    className="field"
                    autoComplete="tel"
                    pattern="[0-9+\\-\\s]{8,16}"
                    title="Please enter a valid phone number"
                    required
                  />
                  <select id="trial-program" name="program" className="field" defaultValue="MMA Conditioning" required>
                    <option>Beginner Martial Arts</option>
                    <option>MMA Conditioning</option>
                    <option>Self Defense Training</option>
                    <option>Kids Martial Arts</option>
                    <option>Advanced Fighter Training</option>
                  </select>
                  <textarea
                    id="trial-goals"
                    name="goals"
                    placeholder="What would you like to achieve?"
                    className="field min-h-28 resize-none sm:col-span-2"
                  />
                  <button
                    type="submit"
                    className="button-primary sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Reserve My Trial Class"}
                  </button>
                </form>

                {status === "success" ? (
                  <p className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    Thanks. Your trial request was sent successfully, and we will contact you soon.
                  </p>
                ) : null}

                {status === "error" ? (
                  <p className="mt-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    Something went wrong while sending your request. Please call {contactDetails.phone} or try again.
                  </p>
                ) : null}
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
