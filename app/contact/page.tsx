import type { Metadata } from "next";
import { Footer } from "@/components/storefront/footer";
import { Navbar } from "@/components/storefront/navbar";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Vastra Veda for styling help, order support, delivery questions, or wholesale and collaboration inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="section-shell">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <section>
            <p className="eyebrow">Contact Us</p>
            <h1 className="mt-5 text-4xl text-ink-900 sm:text-5xl">We’re here to help you choose the right saree</h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink-700 sm:text-lg">
              Need styling advice, delivery support, or help picking a saree for a wedding or
              festive event? Reach out and our team will get back to you quickly.
            </p>

            <div className="mt-8 space-y-4">
              <div className="glass-card p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Email</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">care@vastraveda.com</p>
              </div>
              <div className="glass-card p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Phone</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">+91 98765 43210</p>
              </div>
              <div className="glass-card p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-700">Studio Hours</p>
                <p className="mt-2 text-lg font-semibold text-ink-900">Mon to Sat, 10 AM to 7 PM</p>
              </div>
            </div>
          </section>

          <section className="luxury-panel p-6 sm:p-8">
            <h2 className="text-3xl text-ink-900">Send a message</h2>
            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="field" type="text" name="name" placeholder="Your name" />
                <input className="field" type="email" name="email" placeholder="Email address" />
              </div>
              <input className="field" type="text" name="occasion" placeholder="Shopping for which occasion?" />
              <textarea
                className="field min-h-[180px] resize-none"
                name="message"
                placeholder="Tell us what style, fabric, or event you are shopping for"
              />
              <button type="submit" className="button-primary">
                Contact Support
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
