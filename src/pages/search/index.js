import { Container, Input, Flex, Button } from "@chakra-ui/react"
import { SearchCard } from "../../components/Search"
import { useState } from 'react'
export default function Search() {
  const [search_value, setSearchValue] = useState();
  const handleChange = (event) =>{
    setSearchValue(event.target.value);

  }
  return (
    <div>
      <Container maxW={{ base: "", lg: "container.xl" }} mt={3}>
      <Container textAlign='center'>
      
          <form>
            <Input value={search_value} onChange={handleChange} placeholder='Search' bg='white'/>
          </form>
         
          <SearchCard />
          

        </Container>

      </Container>
      
    </div>
  )
}
