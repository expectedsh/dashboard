import React, { ReactNode } from "react"
import { Col, Row } from "../Responsive"
import { styled } from "../../style"

interface IProps {
  name: string
  description?: string
  children?: ReactNode
}

const FormSection = styled(Row)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.color.grey};
  margin-bottom: 2rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`

const Description = styled.p`
  color: ${props => props.theme.color.muted};
`

export default ({ name, description, children }: IProps) => (
  <FormSection>
    <Col medium={4}>
      <h3>{name}</h3>
      {description && (
        <Description>
          {description}
        </Description>
      )}
    </Col>
    <Col medium={8}>
      {children}
    </Col>
  </FormSection>
)
