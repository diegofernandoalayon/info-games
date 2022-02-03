import styled from 'styled-components'

const Button = styled.button.attrs(props => ({
  size: props.size || '0.5em',
  bgColor: props.bgColor || '#d195d3'
}))`
  background-color: ${props => props.bgColor};
  color: #fff;
  border: none;
  border-radius: 8px;
  margin:  ${props => props.size};
  padding: ${props => props.size};
  cursor: pointer;
  &:hover{
    background-color: #d194d2;
  }
`

export default Button
