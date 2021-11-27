import { useState } from "react"
import { Input, Text, Flex, Grid, Box ,Container} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { DashboardCard } from "@components/DashboardCard"
import PrivateRoute from "src/PrivateRoute/PrivateRoute"

export default function Search({ data: searchCards }) {
  const router = useRouter()
  const [search_value, setSearchValue] = useState("")
  const handleChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <PrivateRoute>
 <Container maxW="container.xl" margin='50px auto'>
        <Text fontSize="4xl" mb={4} style={{ fontWeight: "bold" }} textAlign="center">
              Available Programs
        </Text>
        <Flex direction='row'>
          <Input
            w={{ base: "100%", md: "70%", lg: "60%", xl: "50%" }}
            mx="auto"
            value={search_value}
            onChange={handleChange}
            placeholder='Search'
            bg='white'
          />
        </Flex>

        <Grid
          alignItems='center'
          templateColumns={{sm: '1fr', md: 'repeat(2,1fr)',lg: 'repeat(3,1fr)',xl: 'repeat(3,1fr)'}}
          mt='8'
          columnGap={6}
          rowGap={3}
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
              return (
                <DashboardCard
                  key={data._id}
                  program={data}
                  onClick={() => router.push(`/programs/${data._id}`)}
                />
              )
            })}
        </Grid>
      </Container>
    </PrivateRoute>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/programs")
  const data = await res.json()

  return {
    props: { data },
  }
}