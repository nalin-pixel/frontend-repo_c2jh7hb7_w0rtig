import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Visit Us</h2>
            <p className="mt-2 text-gray-600">We welcome walk-ins and appointments for bespoke consultations.</p>
            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3"><MapPin className="text-amber-600" /> 21 Goldsmith Lane, Old Town</div>
              <div className="flex items-center gap-3"><Phone className="text-amber-600" /> +1 (234) 567-890</div>
              <div className="flex items-center gap-3"><Mail className="text-amber-600" /> hello@aurumatelier.com</div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-amber-200">
            <iframe
              title="map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.2945%2C48.8584%2C2.295%2C48.8589&layer=mapnik"
              className="w-full h-72"
            />
            <div className="p-4 bg-amber-50 text-sm text-amber-900">Open Tue–Sat · 10am–6pm</div>
          </div>
        </div>
      </div>
    </section>
  );
}
