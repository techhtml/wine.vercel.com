import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const WhitesWinePage: NextPage = () => {
  const name = 'whites';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  )
}

export default WhitesWinePage;