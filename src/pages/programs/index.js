import { Container, Input, Text, Flex, Grid, Box } from "@chakra-ui/react"
import { SearchCard } from "../../components/Search/index"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Search() {
  const [search_value, setSearchValue] = useState("")
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  const [searchCards, setSearchCards] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/programs").then((response) => {
      setSearchCards(response.data)
    })
  }, [])
  return (
    <Box width='80%' margin='10px 10%'>
      <Flex direction='row'>
        <Input
          value={search_value}
          onChange={handleChange}
          placeholder='Search'
          bg='white'
        />
      </Flex>

      <Grid
        alignItems='center'
        templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
      >
        {searchCards
          .filter((val) => {
            if (search_value == "") {
              if (!searchCards.includes(val.id)) {
                return val
              }
            } else if (
              val.name.toLowerCase().includes(search_value.toLowerCase())
            ) {
              return val
            }
            return null
          })
          .map((data) => {
            return <SearchCard key={data.id} cardData={data} />
          })}
      </Grid>
    </Box>
  )
}
