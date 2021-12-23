import { Error, Loading, WineCard } from ".";
import { useWineData } from "../hooks/useWineData";
import { Wine } from "../types/Wine";

interface WineContainerProps {
  name: string
}

export const WineContainer = ({ name }: WineContainerProps) => {
  const { data, error } = useWineData(name)
  
  if(error) return <Error />
  if(!data) return <Loading />
  
  return (
    <main>
      {data.map((wineData: Wine) => {
        return (
          <WineCard 
            key={`${name}-wine-list-${wineData.id}`} 
            wineData={wineData}
          />
        )
      })}
    </main>
  )

}