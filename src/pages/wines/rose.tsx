import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const RoseWinePage: NextPage = () => {
  const name = 'rose';

  return (
    <div>
      <h1>{name} wine</h1>
      <WineContainer name={name} />
    </div>
  )
}

export default RoseWinePage;