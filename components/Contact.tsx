import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Calendar, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'message'>('booking');

  return (
    <section id="contact" className="py-20 bg-brand-900 text-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-8">Visit Us</h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-brand-200">123 Albion Street</p>
                  <p className="text-brand-200">Leeds, LS1 5AA, United Kingdom</p>
                  <button className="mt-2 text-brand-400 hover:text-white underline text-sm transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Contact</h3>
                  <p className="text-brand-200">+44 113 123 4567</p>
                  <button className="mt-2 text-brand-400 hover:text-white underline text-sm transition-colors">
                    Call Now
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-brand-400 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                  <p className="text-brand-200">Mon - Sun: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-brand-800 rounded-lg flex items-center justify-center border border-brand-700 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30"></div>
               <span className="relative z-10 text-brand-400 flex items-center font-semibold tracking-wide">
                 <MapPin className="mr-2 h-5 w-5" />
                 View on Google Maps
               </span>
            </div>
          </div>

          {/* Booking & Contact Forms */}
          <div className="bg-brand-800 rounded-2xl border border-brand-700 overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex border-b border-brand-700">
              <button 
                onClick={() => setActiveTab('booking')}
                className={`flex-1 py-4 flex items-center justify-center font-serif font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeTab === 'booking' 
                    ? 'bg-brand-800 text-white border-b-2 border-brand-500' 
                    : 'bg-brand-900/40 text-brand-400 hover:text-brand-200 hover:bg-brand-900/60'
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book a Table
              </button>
              <button 
                onClick={() => setActiveTab('message')}
                className={`flex-1 py-4 flex items-center justify-center font-serif font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeTab === 'message' 
                    ? 'bg-brand-800 text-white border-b-2 border-brand-500' 
                    : 'bg-brand-900/40 text-brand-400 hover:text-brand-200 hover:bg-brand-900/60'
                }`}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'booking' ? (
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Date</label>
                      <input type="date" className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors [color-scheme:dark]" />
                    </div>
                    <div>
                       <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Time</label>
                      <input type="time" className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors [color-scheme:dark]" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Number of Guests</label>
                    <select className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Name</label>
                      <input type="text" className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" placeholder="Your Name" />
                    </div>
                    <div>
                       <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Phone</label>
                      <input type="tel" className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" placeholder="+44..." />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Special Requests</label>
                    <textarea rows={2} className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" placeholder="Occasion, dietary requirements..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 rounded-md transition-all transform hover:scale-[1.02] shadow-lg mt-2 uppercase tracking-widest text-sm">
                    Confirm Booking
                  </button>
                  <p className="text-center text-xs text-brand-400 mt-2">Booking confirmation will be sent via SMS/Email.</p>
                </form>
              ) : (
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Name</label>
                      <input type="text" className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                       <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Phone</label>
                      <input type="tel" className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" placeholder="+44..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Email</label>
                    <input type="email" className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-brand-300 mb-1">Message</label>
                    <textarea rows={4} className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-white focus:outline-none focus:border-brand-400 transition-colors" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-md transition-colors mt-2">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;