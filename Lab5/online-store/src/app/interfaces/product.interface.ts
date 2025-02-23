export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  link: string;
  likes: number;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
} 