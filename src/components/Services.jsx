import { Gem, ShieldCheck, Wrench, Recycle } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Gem, title: "Custom Design", desc: "Sketch-to-setting bespoke jewellery crafted to fit your story." },
    { icon: ShieldCheck, title: "Appraisals", desc: "Insurance and resale valuations by qualified professionals." },
    { icon: Wrench, title: "Repairs", desc: "Sizing, soldering, stone setting, and full restorations." },
    { icon: Recycle, title: "Remodelling", desc: "Transform heirlooms into contemporary pieces you’ll wear often." },
  ];
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Services</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 rounded-xl border border-amber-200 bg-white/70">
              <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
