export default function Craft() {
  const items = [
    {
      title: "Engagement Rings",
      desc: "Design your forever piece with ethically sourced stones and 18k gold.",
      img: "https://images.unsplash.com/photo-1607958996333-41aef7b0b6dd?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Bespoke Jewellery",
      desc: "One-of-a-kind commissions tailored to your story and style.",
      img: "https://images.unsplash.com/photo-1610375461798-3a92661b1812?q=80&w=1200&auto=format&fit=crop"
    },
    {
      title: "Restoration & Repair",
      desc: "Bring cherished pieces back to life with expert care.",
      img: "https://images.unsplash.com/photo-1571731956672-c37261bd8cf5?q=80&w=1200&auto=format&fit=crop"
    }
  ];
  return (
    <section id="craft" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Our Craft</h2>
        <p className="mt-2 text-gray-600">Traditional techniques, modern design.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <article key={i.title} className="group rounded-xl overflow-hidden border border-amber-200/70 bg-amber-50/30 hover:shadow-md transition">
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src={i.img} alt={i.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{i.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{i.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
