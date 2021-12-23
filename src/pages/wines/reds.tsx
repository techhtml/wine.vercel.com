import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const RedsWinePage: NextPage = () => {
  const name = 'reds';
  
  return (
    <div>
      <h1>{name} wine</h1>
      <WineContainer name={name} />
    </div>
  )
}

export default RedsWinePage;