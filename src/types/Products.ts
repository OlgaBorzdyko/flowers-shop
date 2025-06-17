export interface Product {
  id: number
  itemName: string
  price: number
  img: string
  description?: string
}

export interface Category {
  key: string
  categoryName: string
  backgroundColor: string
  img: string
  products: Product[] | undefined
}
