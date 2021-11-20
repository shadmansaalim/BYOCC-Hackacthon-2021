import { AddIcon } from "@chakra-ui/icons"
import { Button, Grid, Text, Box, Flex, Spacer, Link } from "@chakra-ui/react"
import { DashboardCard } from "@components/Dashboard"
import useAuth from "src/hooks/useAuth"
import { CircularProgress } from "@chakra-ui/progress"

import PrivateRoute from "src/PrivateRoute/PrivateRoute"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Dashboard() {
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
        <Box width='80%' margin='10px 10%'>
          <Flex direction='row'>
            <Text fontSize='2xl' style={{ fontWeight: "bold" }}>
              My Loyalty Cards
            </Text>
            <Spacer />
            <Button
              leftIcon={<AddIcon />}
              colorScheme='green'
              onClick={() => router.push(`/programs`)}
            >
              Add
            </Button>
          </Flex>

          <Grid
            alignItems='center'
            templateColumns='repeat(auto-fill, minmax(300px, 1fr))'
            my='8'
          >
            {organisations.map((organisation) => (
              <Link href='cards/'>
                <DashboardCard
                  key={organisation._id}
                  organisation={organisation}
                ></DashboardCard>
              </Link>
            ))}
          </Grid>
        </Box>
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
