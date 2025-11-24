import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    rating: 4,
    content: 'The decor is absolutely pleasant with a really nice vibe. We had a slight wait due to the morning rush, but the management staff took great care of us afterwards. The breakfast was fantastic.',
    highlights: ['Pleasant Decor', 'Good Breakfast', 'Caring Management']
  },
  {
    id: '2',
    author: 'David Miller',
    rating: 5,
    content: 'Fabulous dishes! The Chicken Supreme and Buffalo Wings were highlights. Excellent drinks as well, particularly the frappe. The friendly staff made the ambience even better.',
    highlights: ['Chicken Supreme', 'Matcha Latte', 'Friendly Staff']
  },
  {
    id: '3',
    author: 'Emma Thompson',
    rating: 5,
    content: 'Beautifully decorated space with a fresh atmosphere. The Bang Bang spicy chicken and Lamb Shanks were cooked to perfection. The manager personally checked on us, which was a lovely touch.',
    highlights: ['Lamb Shanks', 'Welcome Staff', 'Great Value']
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-900 font-bold mb-4">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-brand-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative group">
              <Quote className="absolute top-6 right-6 text-brand-200 h-10 w-10 group-hover:text-brand-300 transition-colors" />
              
              <div className="flex mb-4 text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < review.rating ? 'fill-current' : 'text-gray-300 fill-none'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 leading-relaxed min-h-[100px]">
                "{review.content}"
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {review.highlights.map((tag, idx) => (
                  <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-brand-600 border border-brand-100">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="font-serif font-bold text-brand-900 text-lg">
                {review.author}
              </div>
              <div className="text-xs text-brand-400 uppercase tracking-wide">Verified Guest</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;