import { Container, Input, Text, Flex, Grid, Box } from "@chakra-ui/react"
import { SearchCard } from "../../components/Search/index"
import axios from 'axios'
import { useState, useEffect } from "react"
import { CircularProgress } from '@chakra-ui/progress';

export default function Search() {
  const [search_value, setSearchValue] = useState("")
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }
  const [searchCards, setSearchCards] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/organisation')
      .then(response => {
        setSearchCards(response.data)
      })
  }, [])
  return (
    <div>
      {
        searchCards.length
        ?
        <Box width="80%" margin="10px 10%">
      <Flex direction='row'>
        <Input
          value={search_value}
          onChange={handleChange}
          placeholder='Search'
          bg='white'
        />
      </Flex>

      <Grid 
        alignItems="center"
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {searchCards
          .filter((val) => {
            if (search_value == ""){
              if (! searchCards.includes(val.id)) {
                return val
              }
            } else if (val.name.toLowerCase().includes(search_value.toLowerCase())) {
              return val
            }
            return null
          })
          .map((data, _) => {
            return (
              <SearchCard key={data.id} cardData={data}/>
            )
          })}
      </Grid>
    </Box>
    :
    <div style={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
  }}>
      <CircularProgress isIndeterminate color="green.300" />
  </div>
      }
    </div>
  )
}
