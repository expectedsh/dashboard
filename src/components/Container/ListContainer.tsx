import React from "react"
import TimeAgo from "react-timeago"
import { usePromise } from "../../hooks"
import { getContainers, IContainer } from "../../client"
import { Header } from "../Layout"
import { Container } from "../Responsive"
import { Card, CardTable } from "../Card"
import { Loader } from "../Loader"
import { Dropdown, DropdownButton, DropdownContent, DropdownItem } from "../Dropdown"
import { ButtonLink } from "../Form"
import { styled } from "../../style"

const Tag = styled.div`
  display: inline;
  background: ${props => props.theme.color.dark};
  color: ${props => props.theme.color.light};
  padding: 2px 12px;
  margin-right: 5px;
  border-radius: 15px;
`

const columns = [
  // {
  //   render: () => (
  //     <img src={require("./test.svg")} style={{
  //       marginRight: 15,
  //       border: "1px solid red",
  //       borderRadius: "50%",
  //       height: 42,
  //       padding: 5,
  //     }}/>
  //   ),
  // },
  {
    title: "Name",
    key: "name",
    render: (name: any) => (
      <>
        {name}
      </>
    ),
  },
  {
    title: "Image",
    key: "image",
  },
  {
    title: "Created",
    key: "createdAt",
    render: (createdAt: any) => <TimeAgo date={createdAt} minPeriod={10}/>,
  },
  {
    title: "Tags",
    key: "tags",
    render: (tags: any) => (
      <>
        {tags.map((tag: string, index: number) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </>
    ),
  },
  {
    title: "",
    key: "",
    render: () => {
      const overlay = () => (
        <DropdownContent>
          <DropdownItem><a href="#">Action</a></DropdownItem>
          <DropdownItem><a href="#">Another action</a></DropdownItem>
          <DropdownItem><a href="#">Something else here</a></DropdownItem>
        </DropdownContent>
      )

      return (
        <Dropdown overlay={overlay}>
          <DropdownButton href="#">
            More
          </DropdownButton>
        </Dropdown>
      )
    },
  },
]

export default () => {
  const { loading, data, error } = usePromise(() => getContainers(), [])

  return (
    <>
      <Header title="Containers" preTitle="Overview">
        <ButtonLink color="green" to="/containers/new">
          Create
        </ButtonLink>
      </Header>

      <Container>
        {error && (
          <p>Error: {error.message}...</p>
        )}
        <Loader loading={loading}>
          {data && (
            <Card>
              <CardTable<IContainer> columns={columns} dataSource={data}
                                     onRowClick={(data) => console.log(data)}/>
            </Card>
          )}
        </Loader>
      </Container>
    </>
  )
}
