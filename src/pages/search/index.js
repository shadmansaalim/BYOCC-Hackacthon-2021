import { Container, Input, Text, Flex, Grid, Button } from "@chakra-ui/react"
import { SearchCard } from "../../components/Search/index"

import { useState } from "react"
export default function Search() {
  const [search_value, setSearchValue] = useState()
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  return (

    <Container maxW={{ base: "", lg: "container.xl" }} mt={3}>
      <Flex direction='row'>
        <Input
          value={search_value}
          onChange={handleChange}
          placeholder='Search'
          bg='white'
        />
      </Flex>

      <Container>
        <SearchCard />
        <SearchCard />
      </Container>
    </Container>
  )
}
