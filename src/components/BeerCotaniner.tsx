import { BeerCard, Error, Loading } from ".";
import { useBeerData } from "../hooks/useBeerData";
import { Beer } from "../types/Beer";

interface BeerContainerProps {
  name: string,
}


export const BeerContainer = ({ name }: BeerContainerProps) => {
  const { data, error } = useBeerData('ale');

  if(error) return <Error />
  if(!data) return <Loading />

  return (
    <main>
      {data.map((beerData: Beer) => {
        return (
          <BeerCard beerData={beerData} />
        )
      })}
    </main>
  )
}