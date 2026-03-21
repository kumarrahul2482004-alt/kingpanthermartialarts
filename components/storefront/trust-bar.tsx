import { BadgeCheck, CreditCard, ShieldEllipsis, Truck } from "lucide-react";

const badges = [
  { icon: ShieldEllipsis, label: "Secure checkout" },
  { icon: CreditCard, label: "COD available" },
  { icon: Truck, label: "Fast dispatch" },
  { icon: BadgeCheck, label: "Quality checked" },
];

export function TrustBar() {
  return (
    <section className="pb-6">
      <div className="container-shell">
        <div className="luxury-panel grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-50 text-brand-purple">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-ink-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
