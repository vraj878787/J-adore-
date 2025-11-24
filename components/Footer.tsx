import React from 'react';
import { Instagram, Facebook, Twitter, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-brand-200 py-12 border-t border-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-6">
          <Coffee className="h-6 w-6 text-brand-400" />
          <span className="font-serif text-xl font-bold text-white">Cafe J'adore</span>
        </div>
        
        <div className="flex space-x-8 mb-8">
          <a href="#" className="hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-brand-400 transition-colors"><Twitter size={20} /></a>
        </div>

        <p className="text-sm text-brand-400">
          © 2025 Cafe J'adore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;