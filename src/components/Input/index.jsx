import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
  type: 'text',

  size: props.size || '1em'
}))`
  color: #d194d2;
  border: 1px solid #d194d2;
`
export default Input
