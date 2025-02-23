import { Product } from '../interfaces/product.interface';

export const products: Product[] = [
  // Smartphones (categoryId: 1)
  {
    id: 1,
    categoryId: 1,
    name: 'iPhone 15 Pro Max',
    description: 'Apple iPhone 15 Pro Max 256GB Natural Titanium',
    price: 649890,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h98/83559848214558.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h13/h52/83559848247326.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138374/'
  },
  {
    id: 2,
    categoryId: 1,
    name: 'Samsung S24 Ultra',
    description: 'Samsung Galaxy S24 Ultra 5G 12/256GB Gray',
    price: 599890,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd5/h0f/84941322559518.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/h6b/84941322690590.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h97/h58/84941322821662.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-256gb-seryi-115575060/'
  },
  {
    id: 3,
    categoryId: 1,
    name: 'Xiaomi 13T Pro',
    description: 'Xiaomi 13T Pro 12 GB/512 GB Black',
    price: 389890,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h55/83559839334430.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h19/h42/83559839367198.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/h7b/83559839399966.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-13t-pro-12-gb-512-gb-chernyi-113115664/'
  },
  {
    id: 4,
    categoryId: 1,
    name: 'Google Pixel 8 Pro',
    description: 'Google Pixel 8 Pro 12 GB/256 GB Black',
    price: 499990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf7/h43/84136286232606.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h11/h95/84136286265374.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h2b/h95/84136286298142.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-256-gb-chernyi-113692604/'
  },
  {
    id: 5,
    categoryId: 1,
    name: 'OPPO Find N3',
    description: 'OPPO Find N3 16 GB/512 GB Gold',
    price: 799990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h61/h33/84981504974878.png',
      'https://resources.cdn-kaspi.kz/img/m/p/h5f/h9c/84981505007646.png',
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h9d/84981505040414.png'
    ],
    link: 'https://kaspi.kz/shop/p/oppo-find-n3-16-gb-512-gb-zolotistyi-115632944/'
  },

  // Laptops (categoryId: 2)
  {
    id: 6,
    categoryId: 2,
    name: 'MacBook Pro 14',
    description: 'Apple MacBook Pro 14 MRX33 Black',
    price: 989890,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h3e/h8e/84577201807390.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/h31/84577201840158.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h19/h42/84577201872926.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/'
  },
  {
    id: 7,
    categoryId: 2,
    name: 'ASUS ROG Strix G16',
    description: 'ASUS ROG Strix G16 G614JV-N3135 90NR0C61-M00E70 Black',
    price: 699990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h78/hac/84034383495198.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/h5e/84034383527966.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8d/84034383560734.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614jv-n3135-90nr0c61-m00e70-chernyi-115970817/'
  },
  {
    id: 8,
    categoryId: 2,
    name: 'Lenovo Legion Pro 7',
    description: 'Lenovo Legion Pro 7 16IRX8H 82XG006ERK Gray',
    price: 1299990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/he6/hd5/84941315022878.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h8f/h8c/84941315055646.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h9c/84941315088414.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-7-16irx8h-82xg006erk-seryi-115661222/'
  },
  {
    id: 9,
    categoryId: 2,
    name: 'MSI Raider GE78 HX',
    description: 'MSI Raider GE78 HX 13VI-276KZ Black',
    price: 1799990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h71/84941309878302.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h0d/h2e/84941309911070.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7f/h3c/84941309943838.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/msi-raider-ge78-hx-13vi-276kz-chernyi-115661187/'
  },
  {
    id: 10,
    categoryId: 2,
    name: 'Acer Predator Helios 16',
    description: 'Acer Predator Helios 16 PH16-71-94MS NH.QJQER.004 Black',
    price: 899990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/84941318627358.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8d/84941318660126.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h9c/84941318692894.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/acer-predator-helios-16-ph16-71-94ms-nh-qjqer-004-chernyi-115661250/'
  },

  // Headphones (categoryId: 3)
  {
    id: 11,
    categoryId: 3,
    name: 'AirPods Pro 2',
    description: 'Apple AirPods Pro 2nd generation with USB-C White',
    price: 129990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h8f/84108189663262.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h13/h52/84108189696030.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-usb-c-belyi-113677582/'
  },
  {
    id: 12,
    categoryId: 3,
    name: 'Sony WH-1000XM5',
    description: 'Sony WH-1000XM5 Black',
    price: 189990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h84/hd8/64428155797534.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9d/h7e/64428158156830.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h3c/h9d/64428160516126.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105259822/'
  },
  {
    id: 13,
    categoryId: 3,
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Samsung Galaxy Buds2 Pro Black',
    price: 69990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h93/h77/64338427207710.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h11/h95/64338429534238.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h2b/h95/64338431860766.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510-chernyi-106128763/'
  },
  {
    id: 14,
    categoryId: 3,
    name: 'Huawei FreeBuds Pro 3',
    description: 'Huawei FreeBuds Pro 3 Silver Frost',
    price: 99990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/h41/83834940407838.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h4e/h7e/83834940440606.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h69/h7f/83834940473374.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/huawei-freebuds-pro-3-silver-frost-113298608/'
  },
  {
    id: 15,
    categoryId: 3,
    name: 'Nothing Ear (2)',
    description: 'Nothing Ear (2) White',
    price: 89990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf5/h05/80750151303198.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h06/80750151368734.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h5f/h07/80750151434270.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/nothing-ear-2-belyi-110555238/'
  },

  // Smartwatches (categoryId: 4)
  {
    id: 16,
    categoryId: 4,
    name: 'Apple Watch Ultra 2',
    description: 'Apple Watch Ultra 2 49mm Titanium',
    price: 499990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd5/h0f/84501502738462.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h1b/h6b/84501502771230.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h97/h58/84501502803998.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-watch-ultra-2-49-mm-titanium-chernyi-114111146/'
  },
  {
    id: 17,
    categoryId: 4,
    name: 'Samsung Galaxy Watch6 Classic',
    description: 'Samsung Galaxy Watch6 Classic 47mm Black',
    price: 169990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf4/h41/83834940407838.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h4e/h7e/83834940440606.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h69/h7f/83834940473374.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch6-classic-47-mm-chernyi-111018927/'
  },
  {
    id: 18,
    categoryId: 4,
    name: 'Huawei Watch GT4',
    description: 'Huawei Watch GT4 46mm Brown',
    price: 109990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/84941318627358.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8d/84941318660126.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7c/h9c/84941318692894.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/huawei-watch-gt4-46-mm-korichnevyi-113401540/'
  },
  {
    id: 19,
    categoryId: 4,
    name: 'Google Pixel Watch 2',
    description: 'Google Pixel Watch 2 41mm Black',
    price: 199990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h78/hac/84034383495198.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/hc9/h5e/84034383527966.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/h8d/84034383560734.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/google-pixel-watch-2-41-mm-chernyi-114380716/'
  },
  {
    id: 20,
    categoryId: 4,
    name: 'Garmin Epix Pro',
    description: 'Garmin Epix Pro 47mm Black',
    price: 499990,
    rating: 5,
    likes: 0,
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h71/84941309878302.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h0d/h2e/84941309911070.jpg',
      'https://resources.cdn-kaspi.kz/img/m/p/h7f/h3c/84941309943838.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/garmin-epix-pro-47-mm-chernyi-112012177/'
  }
]; 