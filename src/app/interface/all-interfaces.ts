export interface mycard {
  id: number,
  name: string,
  describe: string,
  image: string
}
 export interface mycarosel{
  id: number,
  name: string,
  image: string
}
export interface myproductcard{
  id: number,
  title: string,
  price:number,
  description:string,
  image: string,
  categories: string
  rating:{
    rate:number,
    count:number
  }
}

export interface from{
  email:string,
  password:string
}
