import { Sparkles, Shield, Gem } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Handcrafted Gold Jewellery
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Timeless pieces designed and made in-house. Restorations, custom designs, and everyday treasures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition">Book a consultation</a>
              <a href="#craft" className="px-5 py-3 rounded-md border border-amber-200 text-amber-800 hover:bg-amber-50 transition">Explore our craft</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Feature icon={<Sparkles className="text-amber-600" size={18} />} title="Custom Design" />
              <Feature icon={<Shield className="text-amber-600" size={18} />} title="Lifetime Care" />
              <Feature icon={<Gem className="text-amber-600" size={18} />} title="Certified Metals" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-tr from-amber-200 via-amber-100 to-white ring-1 ring-amber-200/60 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-amber-300 blur-2xl opacity-70" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-amber-200 blur-2xl opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-800">{title}</span>
    </div>
  );
}
