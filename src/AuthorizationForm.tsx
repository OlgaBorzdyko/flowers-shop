import TextField from '@mui/material/TextField'
import styled from 'styled-components'

const AuthorizationForm = () => {
  return (
    <FormContainer>
      <TextField>поле</TextField>
    </FormContainer>
  )
}

export default AuthorizationForm

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
