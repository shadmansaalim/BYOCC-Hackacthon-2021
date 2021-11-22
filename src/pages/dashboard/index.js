import { AddIcon } from "@chakra-ui/icons"
import { Button, Grid, Text, Box, Flex, Spacer, Link , Container} from "@chakra-ui/react"
import { DashboardCard } from "@components/DashboardCard"
import useAuth from "src/hooks/useAuth"
import { CircularProgress } from "@chakra-ui/progress"

import PrivateRoute from "src/PrivateRoute/PrivateRoute"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function dashboard() {
  const router = useRouter()
  const { user } = useAuth()
  const [organisations, setOrganisations] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/userData?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrganisations(data))
  }, [user.email])

  return (
    <PrivateRoute>
      {organisations.length ? (
        <Container maxW="container.xl" margin='50px auto'>
          <Flex direction='row' alignItems="center" justifyContent="space-between">
            <Text fontSize={{ base: "24px", md: "32px", lg: "42px" }} style={{ fontWeight: "bold" }}>
              My Loyalty Cards
            </Text>
            <Button
              rightIcon={<AddIcon />}
              colorScheme='green'
              variant="outline"
              onClick={() => router.push(`/programs`)}
            >
            <Text fontSize='xl' m="0">
              Add
            </Text>
            </Button>
          </Flex>

          <Grid
            alignItems='center'
            templateColumns={{sm: '1fr', md: 'repeat(2,1fr)',lg: 'repeat(3,1fr)',xl: 'repeat(4,1fr)'}}
            mt='8'
            columnGap={6}
            rowGap={3}
          >
            {organisations.map((organisation) => (
                <DashboardCard
                  key={organisation._id}
                  organisation={organisation}
                  onClick={() => router.push(`/cards/${organisation._id}`)}
                ></DashboardCard>
            ))}
          </Grid>
        </Container>
      ) : (
        <>
          {organisations === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "48px",
              }}
            >
              <Text fontSize='xl' style={{ fontWeight: "bold" }}>
                No programs added to Dashboard
              </Text>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <CircularProgress isIndeterminate color='green.300' />
            </div>
          )}
        </>
      )}
    </PrivateRoute>
  )
}
