import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const WhitesWinePage: NextPage = () => {
  const name = 'whites';

  return (
    <div>
      <h1>{name} wine</h1>
      <WineContainer name={name} />
    </div>
  )
}

export default WhitesWinePage;