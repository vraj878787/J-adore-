import React from 'react';
import { Star, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-200 rounded-full opacity-50 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop" 
                alt="Interior Decor" 
                className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-brand-300 rounded-lg z-20"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h4 className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-2">Our Story</h4>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-900 font-bold mb-6 leading-tight">
              A Symphony of Taste & Ambiance
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to Cafe J’adore, a sanctuary where culinary excellence meets genuine hospitality. 
              Our guests frequently describe our space as a beautifully decorated haven with a lively yet relaxing vibe 
              that makes every visit feel special.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you are joining us for a hearty breakfast, a casual lunch, or an intimate dinner, 
              our dedicated management and attentive staff are here to ensure your experience is flawless. 
              We believe in the power of good food and warm smiles to bring people together.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-brand-200 pt-8">
              <div className="text-center">
                <Heart className="h-8 w-8 text-brand-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-brand-800">Relaxing Vibe</p>
              </div>
               <div className="text-center">
                <Users className="h-8 w-8 text-brand-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-brand-800">Friendly Staff</p>
              </div>
               <div className="text-center">
                <Star className="h-8 w-8 text-brand-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-brand-800">Quality Food</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;