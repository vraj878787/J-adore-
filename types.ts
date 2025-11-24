export enum MenuCategory {
  Breakfast = 'Breakfast',
  Chicken = 'Chicken',
  Lamb = 'Lamb',
  Drinks = 'Drinks',
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  content: string;
  highlights: string[];
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}