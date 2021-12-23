import type { NextPage } from "next";
import { WineContainer } from "../../components/";

const SparklingWinePage: NextPage = () => {
  const name = 'sparkling';

  return (
    <div>
      <WineContainer name={name} />
    </div>
  )
}

export default SparklingWinePage;