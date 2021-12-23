import styled from "@emotion/styled"
import React from "react"
import { Navigation } from "."

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>
        { children }
      </Container>
    </div>
  )
}

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
`