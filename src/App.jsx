import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Craft from "./components/Craft";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-[Inter] text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <Craft />
        <Services />
        <Contact />
        <footer className="py-10 bg-amber-950 text-amber-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Aurum Atelier · All rights reserved.</p>
            <p className="text-sm/relaxed text-amber-200">Handmade with care in our studio.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
