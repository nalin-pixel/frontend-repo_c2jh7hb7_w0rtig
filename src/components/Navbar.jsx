import { Menu, Phone, MapPin, Instagram } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-600 shadow-inner" />
            <span className="text-xl font-semibold tracking-wide text-gray-900">Aurum Atelier</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#craft" className="text-gray-700 hover:text-amber-600 transition">Craft</a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 transition">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition">
              <Phone size={16} />
              <span>Call</span>
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-amber-50 text-gray-700 hover:text-amber-700 transition">
              <Instagram size={18} />
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-amber-50" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <a href="#craft" className="px-3 py-2 rounded-md hover:bg-amber-50">Craft</a>
              <a href="#services" className="px-3 py-2 rounded-md hover:bg-amber-50">Services</a>
              <a href="#contact" className="px-3 py-2 rounded-md hover:bg-amber-50">Contact</a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-600 text-white w-max">
                <Phone size={16} /> Call
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} /> 21 Goldsmith Lane, Old Town
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
