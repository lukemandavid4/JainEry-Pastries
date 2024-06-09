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
