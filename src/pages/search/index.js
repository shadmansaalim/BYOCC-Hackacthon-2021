import { Container, Input, Text, Flex, Grid, Button } from "@chakra-ui/react"
import { SearchCard } from "../../components/Search/index"
import { DashboardCard } from "../../components/Dashboard/index"

import { useState } from "react"
export default function Search() {
  const [search_value, setSearchValue] = useState()
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (
<<<<<<< HEAD
    <Container maxW={{ base: "", lg: "container.xl" }} mt={3}>
      <Flex direction='row'>
        <Input
          value={search_value}
          onChange={handleChange}
          placeholder='Search'
          bg='white'
        />
      </Flex>
=======
    <div>
      <Container
        height='1000px'
        maxW='container.sm'
        textAlign='center'
        p={0}
        style={{
          backgroundColor: "#F7F7F7",
        }}
      >
        <Container p={3} textAlign='left'>
          <form>
            <Input placeholder='Search' bg='white' />
          </form>
>>>>>>> a5e6a57c122e421f81646f37905fe5c7b8575ab1

      <Container>
        <SearchCard />
        <SearchCard />
      </Container>
    </Container>
  )
}
