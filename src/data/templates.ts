import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'beach',
    name: 'Beach Vacation',
    description: 'Essential items for a perfect beach getaway',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'b1', name: 'Swimsuit', checked: false, category: 'Clothing' },
      { id: 'b2', name: 'Beach Towel', checked: false, category: 'Beach Gear' },
      { id: 'b3', name: 'Sunscreen', checked: false, category: 'Health' },
      { id: 'b4', name: 'Sunglasses', checked: false, category: 'Accessories' },
      { id: 'b5', name: 'Beach Umbrella', checked: false, category: 'Beach Gear' },
      { id: 'b6', name: 'Flip Flops', checked: false, category: 'Footwear' },
      { id: 'b7', name: 'Beach Bag', checked: false, category: 'Accessories' },
      { id: 'b8', name: 'Water Bottle', checked: false, category: 'Health' },
    ],
  },
  {
    id: 'hiking',
    name: 'Hiking Adventure',
    description: 'Everything you need for a safe hiking trip',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'h1', name: 'Hiking Boots', checked: false, category: 'Footwear' },
      { id: 'h2', name: 'Backpack', checked: false, category: 'Gear' },
      { id: 'h3', name: 'Water Bottle', checked: false, category: 'Health' },
      { id: 'h4', name: 'First Aid Kit', checked: false, category: 'Health' },
      { id: 'h5', name: 'Trail Map', checked: false, category: 'Navigation' },
      { id: 'h6', name: 'Snacks', checked: false, category: 'Food' },
      { id: 'h7', name: 'Rain Jacket', checked: false, category: 'Clothing' },
      { id: 'h8', name: 'Compass', checked: false, category: 'Navigation' },
    ],
  },
  {
    id: 'business',
    name: 'Business Trip',
    description: 'Professional essentials for your business travel',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'bus1', name: 'Laptop', checked: false, category: 'Technology' },
      { id: 'bus2', name: 'Business Attire', checked: false, category: 'Clothing' },
      { id: 'bus3', name: 'Chargers', checked: false, category: 'Technology' },
      { id: 'bus4', name: 'Business Cards', checked: false, category: 'Business' },
      { id: 'bus5', name: 'Notebook', checked: false, category: 'Business' },
      { id: 'bus6', name: 'Dress Shoes', checked: false, category: 'Footwear' },
      { id: 'bus7', name: 'Portfolio', checked: false, category: 'Business' },
      { id: 'bus8', name: 'Travel Documents', checked: false, category: 'Documents' },
    ],
  },
];