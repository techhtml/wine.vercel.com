import type { NextPage } from "next";
import { useWineData } from "../../hooks/useWineData";
import { Wine } from "../../types/Wine";

const PortWinePage: NextPage = () => {
  const { data, error } = useWineData('whites')

  if(error) return <div>Failed to Loading...</div>
  if(!data) return <div>...Loading</div>

  return (
    <div>
      <h1>Wine</h1>
      <main>
        {data.map((wineData: Wine) => {
          const { id, wine, winery } = wineData;

          return (
            <div key={`port-wine-list-${id}`}>
              <h1>{wine}</h1>
              <p>{winery}</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default PortWinePage;