export interface MenuItem {
  id: string;
  name: string;
  category: 'Espresso' | 'Latte' | 'Cappuccino' | 'Mocha' | 'Cold Coffee' | 'Tea' | 'Artisanal Eats' | 'Desserts';
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  image: string;
  badge?: string;
  isPopular?: boolean;
  isOrganic?: boolean;
  prepTime?: string;
  calories?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customization?: string;
}

export interface DessertCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColorClass: string;
  bgHex: string;
  price: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  favoriteOrder: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Coffee' | 'Desserts' | 'Interior' | 'Barista';
  image: string;
  likes: number;
  heightClass: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  link: string;
}

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Outdoor Garden (Lanterns)' | 'Cozy Main Dining' | 'Bar Counter' | 'Quiet Terrace';
  specialRequests?: string;
}
