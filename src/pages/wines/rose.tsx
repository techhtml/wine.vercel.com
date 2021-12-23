import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const RoseWinePage: NextPage = () => {
  const name = 'rose';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  )
}

export default RoseWinePage;