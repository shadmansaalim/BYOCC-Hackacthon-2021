import { useState } from "react"
import { Input, Text, Flex, Grid, Box } from "@chakra-ui/react"

import { SearchCard } from "@components/Search"

export default function Search({ data: searchCards }) {
  const [search_value, setSearchValue] = useState("")
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <Box width='95%' margin='10px auto'>
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

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/organisation")
  const data = await res.json()

  return {
    props: { data },
  }
}
