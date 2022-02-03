import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
  type: 'text',

  size: props.size || '0.5em'
}))`
  color: #d194d2;
  border: 1px solid #d194d2;
  margin: ${props => props.size};
  padding: ${props => props.size};
`
export default Input
