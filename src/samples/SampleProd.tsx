import type { Product } from '../types';


export const products: Product[] = [
    {
      id: '1',
      name: 'Carbon Fiber iPhone Skin',
      price: 29.99,
      description: 'Premium carbon fiber texture skin for iPhone',
      images: ['https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80'],
      category: 'iPhone',
      rating: 4.5,
      reviews: 128
    },
    {
      id: '2',
      name: 'Marble Samsung Skin',
      price: 24.99,
      description: 'Elegant marble design skin for Samsung phones',
      images: ['https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80'],
      category: 'Samsung',
      rating: 4.8,
      reviews: 95
    },
    {
      id: '3',
      name: 'Wood Grain Pixel Skin',
      price: 27.99,
      description: 'Natural wood grain texture for Google Pixel',
      images: ['https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80'],
      category: 'Pixel',
      rating: 4.3,
      reviews: 67
    },
    // Add more products as needed
  ];
  