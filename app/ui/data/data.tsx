export interface BakeryItem {
  id: number;
  image: string;
  name: string;
  href: string;
}

const data: BakeryItem[] = [
  {
    id: 1,
    image: '/home/switch-roll.png',
    name: 'Switch Roll',
    href: '/shop/switch-roll'
  },
  {
    id: 2,
    image: '/home/cookies.png',
    name: 'Cup Cake',
    href: '/shop/cup-cake'
  },
  {
    id: 3,
    image: '/home/pastry.png',
    name: 'Pastry',
    href: '/shop/pastry'
  },
  {
    id: 4,
    image: '/home/cookies.png',
    name: 'Cookies',
    href: '/shop/cookies'
  }
]

export default data


export interface BakeryItems {
  id: number;
  image: string;
  name: string;
  href: string;
  priceNew: number;
  priceOld: number;
}

export const items: BakeryItems[] = [
  {
    id: 1,
    image: '/home/croissant.png',
    name: 'Croissant',
    href: '/shop/switch-roll',
    priceNew: 300,
    priceOld: 350
  },
  {
    id: 2,
    image: '/home/cinnamon-roll.png',
    name: 'Cinnamon Roll',
    href: '/shop/switch-roll',
    priceNew: 350,
    priceOld: 400
  },
  {
    id: 3,
    image: '/home/blueberry-muffin.png',
    name: 'Blueberry Muffin',
    href: '/shop/switch-roll',
    priceNew: 300,
    priceOld: 350
  },
  {
    id: 4,
    image: '/home/pound-cake.png',
    name: 'Pound Cake',
    href: '/shop/switch-roll',
    priceNew: 1200,
    priceOld: 1400
  },
  {
    id: 5,
    image: '/home/chocolate-cookie.png',
    name: 'Chocolate Cookie',
    href: '/shop/switch-roll',
    priceNew: 150,
    priceOld: 200
  },
  {
    id: 6,
    image: '/home/danish-pastry.png',
    name: 'Danish Pastry',
    href: '/shop/switch-roll',
    priceNew: 350,
    priceOld: 400
  },
  {
    id: 7,
    image: '/home/chocolate-cake.png',
    name: 'Chocolate Cake',
    href: '/shop/switch-roll',
    priceNew: 3500,
    priceOld: 4000
  },
  {
    id: 1,
    image: '/home/apple-pie.png',
    name: 'Apple Pie',
    href: '/shop/switch-roll',
    priceNew: 2500,
    priceOld: 3000
  },
]
