import { Category } from '../types/Products'

export const categoriesMock: Category[] = [
  {
    key: 'bouquets',
    categoryName: 'Букеты',
    backgroundColor: 'lightblue',
    img: '/bouquet.png',
    products: [
      { id: 1, itemName: 'Bouquet 1', price: 6500, img: '/bouquet.png' },
      { id: 2, itemName: 'Bouquet 2', price: 6500, img: '/bouquet.png' },
      { id: 3, itemName: 'Bouquet 2', price: 6500, img: '/bouquet.png' },
      { id: 4, itemName: 'Bouquet 2', price: 6500, img: '/bouquet.png' },
      { id: 5, itemName: 'Bouquet 2', price: 6500, img: '/bouquet.png' }
    ]
  },
  {
    key: 'compositions',
    categoryName: 'Композиции',
    backgroundColor: 'pink',
    img: '/composition.png',
    products: []
  },
  {
    key: 'baskets',
    categoryName: 'Корзины цветов',
    backgroundColor: 'lightgreen',
    img: '/basket.png',
    products: []
  },
  {
    key: 'mono-bouquets',
    categoryName: 'Монобукеты',
    backgroundColor: 'lightgray',
    img: '/mono.png',
    products: []
  },
  {
    key: 'plants',
    categoryName: 'Комнатные растения',
    backgroundColor: 'yellow',
    img: '/plants.png',
    products: []
  },
  {
    key: 'sweets',
    categoryName: 'Конфеты',
    backgroundColor: 'purple',
    img: '/chocolate.png',
    products: []
  }
]
