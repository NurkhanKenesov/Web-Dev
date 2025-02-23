import { Injectable } from '@angular/core';
import { Product, Category } from '../models/product.interface';

export interface ProductFilters {
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  minLikes?: number;
  sortBy?: 'price' | 'rating' | 'likes';
  sortOrder?: 'asc' | 'desc';
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Smartwatches' }
  ];

  private products: Product[] = [
    // Smartphones
    {
      id: 1,
      categoryId: 1,
      name: 'iPhone 15 Pro Max',
      description: 'Apple iPhone 15 Pro Max 256GB Black Titanium',
      price: 748890,
      rating: 4.9,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/h24/84459838898206/apple-iphone-15-pro-max-256gb-chernyi-titanium-113138363-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h37/84459839160350/apple-iphone-15-pro-max-256gb-chernyi-titanium-113138363-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/h0e/84459839422494/apple-iphone-15-pro-max-256gb-chernyi-titanium-113138363-3.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-titanium-113138363/'
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Samsung Galaxy S24 Ultra 5G 12/512GB Titanium Gray',
      price: 749890,
      rating: 4.8,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h5c/85060821803038/samsung-galaxy-s24-ultra-5g-12-512gb-seryi-titanium-116004801-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h59/85060822065182/samsung-galaxy-s24-ultra-5g-12-512gb-seryi-titanium-116004801-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h56/85060822327326/samsung-galaxy-s24-ultra-5g-12-512gb-seryi-titanium-116004801-3.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-512gb-seryi-titanium-116004801/'
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Google Pixel 8 Pro',
      description: 'Google Pixel 8 Pro 12/256GB Bay Blue',
      price: 529890,
      rating: 4.7,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h69/84076381298718/google-pixel-8-pro-12-256gb-goluboi-113692579-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h68/h66/84076381560862/google-pixel-8-pro-12-256gb-goluboi-113692579-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha7/h63/84076381823006/google-pixel-8-pro-12-256gb-goluboi-113692579-3.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-256gb-goluboi-113692579/'
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Xiaomi 14 Ultra',
      description: 'Xiaomi 14 Ultra 16/512GB Black',
      price: 699890,
      rating: 4.7,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h05/85119103475742.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h02/85119103508510.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h32/85119103541278.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-512gb-chernyi-116424973/'
    },
    {
      id: 5,
      categoryId: 1,
      name: 'OnePlus 12',
      description: 'OnePlus 12 16/512GB Black',
      price: 549890,
      rating: 4.6,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h05/85119103475742.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h02/85119103508510.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h32/85119103541278.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/oneplus-12-16-512gb-chernyi-115964367/'
    },

    // Laptops
    {
      id: 6,
      categoryId: 2,
      name: 'MacBook Pro 14',
      description: 'Apple MacBook Pro 14 M3 Pro 18/512GB Space Black',
      price: 999890,
      rating: 4.9,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h51/84577188020254.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h24/h3e/84577188052022.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h4e/h55/84577188084790.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-m3-pro-18-512gb-space-black-114791768/'
    },
    {
      id: 7,
      categoryId: 2,
      name: 'ASUS ROG Strix G16',
      description: 'ASUS ROG Strix G16 G614JV-N3163 90NR0C61-M00E70 Black',
      price: 699890,
      rating: 4.7,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h78/hc2/84036216012830.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h5f/h9e/84036216045598.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h9c/84036216078366.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614jv-n3163-90nr0c61-m00e70-chernyi-113671659/'
    },
    {
      id: 8,
      categoryId: 2,
      name: 'Lenovo Legion Pro 7',
      description: 'Lenovo Legion Pro 7 16IRX8H 82W7009ERK Gray',
      price: 899890,
      rating: 4.8,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h5f/84036210442270.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h5b/84036210475038.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h9c/84036210507806.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/lenovo-legion-pro-7-16irx8h-82w7009erk-seryi-113671674/'
    },
    {
      id: 9,
      categoryId: 2,
      name: 'MSI Raider GE78 HX',
      description: 'MSI Raider GE78 HX 13VH-094RU Black',
      price: 1299890,
      rating: 4.9,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/82798470971422.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h8e/82798471004190.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h34/82798471036958.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/msi-raider-ge78-hx-13vh-094ru-chernyi-112831582/'
    },
    {
      id: 10,
      categoryId: 2,
      name: 'Acer Predator Helios 16',
      description: 'Acer Predator Helios 16 PH16-71-94MS NH.QJQER.004 Black',
      price: 799890,
      rating: 4.6,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84036212375582.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h74/84036212408350.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h71/84036212441118.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/acer-predator-helios-16-ph16-71-94ms-nh-qjqer-004-chernyi-113671661/'
    },

    // Headphones
    {
      id: 11,
      categoryId: 3,
      name: 'Apple AirPods Pro 2',
      description: 'Apple AirPods Pro 2nd generation with USB-C',
      price: 129890,
      rating: 4.9,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8f/84108189663262.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/h8c/84108189696030.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-usb-c-belyi-113677457/'
    },
    {
      id: 12,
      categoryId: 3,
      name: 'Sony WH-1000XM5',
      description: 'Sony WH-1000XM5 Black',
      price: 189890,
      rating: 4.8,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5d/h13/64428155797534.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h10/64428158156830.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h1e/h8f/64428160516126.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/'
    },
    {
      id: 13,
      categoryId: 3,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Samsung Galaxy Buds2 Pro Black',
      price: 69890,
      rating: 4.7,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h77/64374862446622.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h02/64374864445470.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h95/h27/64374866444318.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510-chernyi-106128763/'
    },
    {
      id: 14,
      categoryId: 3,
      name: 'Bose QuietComfort Ultra',
      description: 'Bose QuietComfort Ultra Headphones Black',
      price: 219890,
      rating: 4.8,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h9a/84501148950558.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h24/h87/84501148983326.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h4e/h9e/84501149016094.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-headphones-chernyi-114746882/'
    },
    {
      id: 15,
      categoryId: 3,
      name: 'Nothing Ear (2)',
      description: 'Nothing Ear (2) White',
      price: 89890,
      rating: 4.6,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf5/h06/80750872059934.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h19/h7e/80750872092702.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h35/80750872125470.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/nothing-ear-2-belyi-110555238/'
    },

    // Smartwatches
    {
      id: 16,
      categoryId: 4,
      name: 'Apple Watch Ultra 2',
      description: 'Apple Watch Ultra 2 49mm Titanium',
      price: 499890,
      rating: 4.9,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc6/h00/83681057071134.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h01/hfd/83681057103902.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/hfa/83681057136670.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-ultra-2-49-mm-titanium-bezhevyi-113494102/'
    },
    {
      id: 17,
      categoryId: 4,
      name: 'Samsung Galaxy Watch 6 Classic',
      description: 'Samsung Galaxy Watch 6 Classic 47mm Black',
      price: 169890,
      rating: 4.8,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h5f/84057871417374.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h5b/84057871450142.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h9c/84057871482910.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-classic-47-mm-chernyi-112342591/'
    },
    {
      id: 18,
      categoryId: 4,
      name: 'Google Pixel Watch 2',
      description: 'Google Pixel Watch 2 LTE Silver',
      price: 189890,
      rating: 4.7,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/84501146952734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h8e/84501146985502.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h34/84501147018270.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-watch-2-lte-serebristyi-114746878/'
    },
    {
      id: 19,
      categoryId: 4,
      name: 'Garmin Epix Pro',
      description: 'Garmin Epix Pro 47mm Sapphire Black',
      price: 499890,
      rating: 4.9,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h5f/81187348701214.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h5b/81187348733982.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h9c/81187348766750.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/garmin-epix-pro-47-mm-sapphire-chernyi-112119927/'
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Huawei Watch GT 4',
      description: 'Huawei Watch GT 4 46mm Gray',
      price: 109890,
      rating: 4.6,
      likes: 0,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/83834778124318.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h3f/h8e/83834778157086.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h77/h34/83834778189854.jpg'
      ],
      kaspiLink: 'https://kaspi.kz/shop/p/huawei-watch-gt-4-46-mm-seryi-113401592/'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number, filters?: ProductFilters): Product[] {
    let filteredProducts = this.products.filter(product => product.categoryId === categoryId);

    if (filters) {
      if (filters.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.price >= filters.minPrice!);
      }
      if (filters.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.price <= filters.maxPrice!);
      }
      if (filters.minRating !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.rating >= filters.minRating!);
      }
      if (filters.minLikes !== undefined) {
        filteredProducts = filteredProducts.filter(p => p.likes >= filters.minLikes!);
      }

      if (filters.sortBy) {
        filteredProducts.sort((a, b) => {
          const aValue = a[filters.sortBy!];
          const bValue = b[filters.sortBy!];
          const order = filters.sortOrder === 'desc' ? -1 : 1;
          
          return (aValue - bValue) * order;
        });
      }
    }

    return filteredProducts;
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

  incrementLikes(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
} 