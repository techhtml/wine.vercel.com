import { Beer } from "../types/Beer"

interface BeerCardProps {
  beerData: Beer
}

export const BeerCard = ({ beerData }: BeerCardProps) => {
  const { name, price } = beerData;
  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}