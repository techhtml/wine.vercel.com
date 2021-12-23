import type { NextPage } from "next";
import { WineContainer } from "../../components";

const PortWinePage: NextPage = () => {
  const name = 'port';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  )
}

export default PortWinePage;