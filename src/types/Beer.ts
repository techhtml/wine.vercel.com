import { Rating } from "./Rating";

export interface Beer {
  price: string,
  name: string,
  rating: Rating,
  image: string,
  id: number,
}