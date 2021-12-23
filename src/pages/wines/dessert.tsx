import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const DessertWinePage: NextPage = () => {
  const name = 'dessert';
  
  return (
    <div>
      <WineContainer name={name} />
    </div>
  )
}

export default DessertWinePage;