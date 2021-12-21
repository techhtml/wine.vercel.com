import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const PortWinePage: NextPage = () => {
  const name = 'port';

  return (
    <div>
      <h1>{name} wine</h1>
      <WineContainer name={name} />
    </div>
  )
}

export default PortWinePage;