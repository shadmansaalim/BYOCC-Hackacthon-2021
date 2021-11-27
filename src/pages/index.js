import { AddIcon } from "@chakra-ui/icons"
<<<<<<< HEAD
import {
  Button,
  Grid,
  Text,
  Box,
  Flex,
  Spacer,
  Container,
} from "@chakra-ui/react"
import { DashboardCard } from "@components/Dashboard"
import useAuth from "@hooks/useAuth"
import { CircularProgress } from "@chakra-ui/progress"
import PrivateRoute from "src/PrivateRoute/PrivateRoute"
import { useEffect, useState } from "react"
export default function Dashboard() {
  const { user } = useAuth()
  const [organisations,setOrganisations] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users?email=${user.email}`)
    .then(res => res.json())
    .then(data => setOrganisations(data));
  },[user.email])

  return (
    <PrivateRoute>
      {
        organisations.length
        ?
        <Box width='80%' margin='10px 10%'>
      <Flex direction='row'>
        <Text fontSize='2xl' style={{ fontWeight: "bold" }}>
          My Loyalty Cards
        </Text>
        <Spacer />
        <Button leftIcon={<AddIcon />} colorScheme='green'>
          Add
        </Button>
      </Flex>

      <Grid
        alignItems='center'
        templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
        my='8'
      >
        {organisations.map((organisation) => (
          <DashboardCard key={organisation._id} organisation={organisation}></DashboardCard>
        ))}
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
=======
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
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/userData?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPrograms(data))
  }, [user.email])

  return (
    <PrivateRoute>
      {programs.length ? (
        <Container maxW="container.xl" margin='50px auto'>
          <Box>
            <Text fontSize={{ base: "24px", md: "32px", lg: "42px" }} style={{ fontWeight: "bold" }}>
              My Loyalty Cards
            </Text>
          </Box>

          <Grid
          alignItems='center'
          templateColumns={{sm: '1fr', md: 'repeat(2,1fr)',lg: 'repeat(3,1fr)',xl: 'repeat(3,1fr)'}}
          mt='8'
          columnGap={6}
          rowGap={3}
        >
            {programs.map((program) => (
                <DashboardCard
                  key={program._id}
                  program={program}
                ></DashboardCard>
            ))}
          </Grid>
        </Container>
      ) : (
        <>
          {programs === 0 ? (
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
>>>>>>> 416511707a4a8ef99b4f73b07622fabf8fd3a271
    </PrivateRoute>
  )
}

