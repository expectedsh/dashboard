import { styled } from "../../style"


export const Input = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: .9375rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.text.normal};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${props => props.theme.color.grey};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  
  &:focus {
    outline: none;
    box-shadow: none;
    border-color: ${props => props.theme.color.blue};
  }
  
  &:disabled, &[readonly] {
    background: ${props => props.theme.color.grey};
  }
`

export const Select = Input.withComponent("select")
