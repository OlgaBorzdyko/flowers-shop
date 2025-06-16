import styled from 'styled-components'

import AuthorizationForm from './AuthorizationForm'
import Categories from './Categories'
import Header from './Header'

const Test = () => {
  return (
    <MainWrapper>
      <Header />
      <MainContentContainer>
        <AuthorizationForm />
        <MainFlowers>
          <Image alt="main-flowers" src="main-flowers.png" />
        </MainFlowers>
      </MainContentContainer>
      <Categories />
    </MainWrapper>
  )
}
export default Test

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const MainFlowers = styled.div`
  height: 90vh;
  margin-left: 20%;
`

const Image = styled.img`
  max-height: 85vh;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
