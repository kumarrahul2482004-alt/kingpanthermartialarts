import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/app/components/contact-form";
import { Container } from "@/app/components/container";
import { Logo } from "@/app/components/logo";
import { footerLinks, socialLinks } from "@/app/lib/site-data";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/60 py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">
          <div className="space-y-6">
            <Logo />
            <p className="max-w-lg text-sm leading-7 text-slate-300">
              King Panther Martial Arts Academy helps students build confidence and helps school owners run leaner,
              smarter operations with automation systems built for growth.
            </p>
            <ContactForm compact />
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Quick Links</h3>
            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Contact</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-300" />
                <span>(555) 010-2026</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-300" />
                <span>r8802746909@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-300" />
                <span>123 Panther Way, Your City</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/30 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 King Panther Martial Arts Academy. All rights reserved.</p>
          <p>Train like a champion. Run your dojo smarter.</p>
        </div>
      </Container>
    </footer>
  );
}
