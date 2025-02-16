export interface Products {
  id: number
  category: string
  title: string
  price:number
  liked: boolean
  visible: boolean
  image: string
  link: string
  characteristics: string
  rating:{
    rate: number
    count: number
  }
}
