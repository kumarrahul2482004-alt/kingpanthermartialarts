import { ContactForm } from "@/app/components/contact-form";
import { Container } from "@/app/components/container";
import { Reveal } from "@/app/components/reveal";

export function ContactSection() {
  return (
    <section className="section-shell pt-0" aria-labelledby="contact-form-heading">
      <Container>
        <Reveal>
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
            <div className="space-y-5">
              <p className="pill">Book Or Demo</p>
              <h2 id="contact-form-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Start with a free trial class or request an automation walkthrough
              </h2>
              <p className="text-base leading-8 text-slate-300">
                Use this form to book a martial arts class, ask about kids programs, or schedule a demo for dojo
                automation. Every submission goes straight to our FormSubmit inbox.
              </p>
              <div className="rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-50">
                Fast response promise: new inquiries are reviewed quickly so trial classes and demos do not sit waiting.
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
