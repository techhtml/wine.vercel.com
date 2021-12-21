import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const DessertWinePage: NextPage = () => {
  const name = 'dessert';
  
  return (
    <div>
      <h1>{name} wine</h1>
      <WineContainer name={name} />
    </div>
  )
}

export default DessertWinePage;