import { AddIcon } from "@chakra-ui/icons"
import { Button, Grid, Text, Box, Flex, Spacer } from "@chakra-ui/react"
import { DashboardCard } from "@components/Dashboard"
import useAuth from "src/hooks/useAuth"
import { CircularProgress } from "@chakra-ui/progress"
import PrivateRoute from "src/PrivateRoute/PrivateRoute"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const { user } = useAuth()
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/userProgram?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPrograms(data))
  }, [user.email])

  return (
    <PrivateRoute>
      {programs.length ? (
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
            {programs.map((program) => (
              <DashboardCard
                key={program._id}
                program={program}
              ></DashboardCard>
            ))}
          </Grid>
        </Box>
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
    </PrivateRoute>
  )
}
