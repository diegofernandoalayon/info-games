import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.bgColor || '#d195d3'};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background-color: #d194d2;
  }
`

export default Button
