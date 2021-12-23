import styled from "@emotion/styled";
import { Wine } from "../types/Wine";

interface WineProps {
  wineData: Wine
}

export const WineCard = ({ wineData }: WineProps) => {
  const { wine, winery, image, location, rating } = wineData;

  return (
    <Container>
      <img src={image} alt='' />
      <h2>
        {wine}
        <Average>{rating.average}</Average>
      </h2>
      <p>{winery} - {location}</p>
      <p>
        별점:
        {rating.reviews.replace(' ratings', '')}
      </p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1em;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
  border-radius: 1em;
`

const Average = styled.span`
  display: inline-block;
  padding: 0.3em;
  font-size: 16px;
  margin-left: 0.5em;
  color: white;
  background: #2ac1bc;
  border-radius: 3px;
`