import styled from 'styled-components'

const Header = () => {
  return (
    <StyledHeader>
      <Title>Flowers</Title>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  display: flex;
  height: 10vh;
  background-color: white;
  border: 1px solid lightgray;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: black;
  font-size: 4rem;
`
