import { styled } from "../../style"

export default styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: ${props => props.theme.text.muted};
`
