import type { NextPage } from "next";
import { BeerContainer } from "../../components/BeerContainer";

const StoutsPage:NextPage = () => {
  const name = 'stouts';
  return (
    <div>
      <h1>{name} beer</h1>
      <BeerContainer name={name} />
    </div>
  )
}

export default StoutsPage;