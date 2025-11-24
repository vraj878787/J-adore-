import React, { useState } from 'react';
import { MenuCategory, MenuItem } from '../types';

const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: 'b1',
    name: 'Full English',
    description: 'Classic breakfast with locally sourced sausage, bacon, eggs, and beans.',
    price: '£12.50',
    category: MenuCategory.Breakfast,
    image: 'https://images.unsplash.com/photo-1533089862017-5614a9570541?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'b2',
    name: 'Avocado Smash',
    description: 'Poached eggs on sourdough with crushed avocado and chilli flakes.',
    price: '£10.00',
    category: MenuCategory.Breakfast,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?q=80&w=600&auto=format&fit=crop'
  },
  // Chicken
  {
    id: 'c1',
    name: 'Chicken Supreme',
    description: 'Pan-roasted breast in a creamy mushroom and white wine sauce.',
    price: '£16.00',
    category: MenuCategory.Chicken,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'c2',
    name: 'Buffalo Wings',
    description: 'Crispy wings tossed in our signature spicy buffalo sauce.',
    price: '£9.50',
    category: MenuCategory.Chicken,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'c3',
    name: 'Chicken Kiev',
    description: 'Breaded chicken breast stuffed with garlic herb butter.',
    price: '£15.50',
    category: MenuCategory.Chicken,
    image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?q=80&w=600&auto=format&fit=crop'
  },
   {
    id: 'c4',
    name: 'Bang Bang Chicken',
    description: 'Crispy spicy chicken strips served with house salad.',
    price: '£14.00',
    category: MenuCategory.Chicken,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=600&auto=format&fit=crop'
  },
  // Lamb
  {
    id: 'l1',
    name: 'Signature Lamb Shanks',
    description: 'Slow-cooked for 8 hours, served with mash and rosemary jus.',
    price: '£22.00',
    category: MenuCategory.Lamb,
    image: 'https://images.unsplash.com/photo-1544516161-6c9f6a3d1e18?q=80&w=600&auto=format&fit=crop'
  },
  // Drinks
  {
    id: 'd1',
    name: 'Classic Frappe',
    description: 'Ice blended coffee topped with whipped cream.',
    price: '£4.50',
    category: MenuCategory.Drinks,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha with steamed oat milk.',
    price: '£5.00',
    category: MenuCategory.Drinks,
    image: 'https://images.unsplash.com/photo-1515825838458-f2a94b20105a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'd3',
    name: 'Berry Mocktail',
    description: 'Refreshing blend of summer berries, mint, and soda.',
    price: '£6.00',
    category: MenuCategory.Drinks,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop'
  },
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(MenuCategory.Breakfast);

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-2">Our Selection</h4>
          <h2 className="font-serif text-4xl text-brand-900 font-bold">Discover Our Menu</h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.values(MenuCategory).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand-600 text-white shadow-lg scale-105'
                  : 'bg-white text-brand-800 hover:bg-brand-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="sm:w-1/3 h-48 sm:h-auto">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 sm:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-bold text-brand-900">{item.name}</h3>
                  <span className="text-brand-600 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;