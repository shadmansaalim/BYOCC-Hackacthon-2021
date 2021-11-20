import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { Container, Grid, Text, Box, Flex, Spacer } from "@chakra-ui/layout"
import { DashboardCard } from "../components/Dashboard/index"

export default function Dashboard() {
  return (
    <Container maxW={{ base: "", lg: "container.xl" }} mt={3}>
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
      >
        {/* render a list of cards */}
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </Grid>
    </Container>
  )
}

