export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number;
  images: string[];
  kaspiLink: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
} 