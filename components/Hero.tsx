import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
          alt="Cafe Ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-lg tracking-tight">
          Cafe J'adore
        </h1>
        <p className="font-sans text-xl md:text-2xl text-brand-50 mb-10 font-light tracking-wide max-w-2xl mx-auto">
          Where great food meets great atmosphere.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-500 transition-all transform hover:scale-105 shadow-lg flex items-center"
          >
            Book a Table
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#menu"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-brand-900 transition-all transform hover:scale-105"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;