import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { Grid, Text, Box, Flex, Spacer, Container } from "@chakra-ui/layout"
import { DashboardCard } from "@components/Dashboard"

export default function Dashboard() {
  return (
    <Container maxW={{ base: "", lg: "container.xl" }} mt={5}>
      <Flex>
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
        my='4'
      >
        <DashboardCard></DashboardCard>
        <DashboardCard></DashboardCard>
        <DashboardCard></DashboardCard>
      </Grid>
    </Container>
  )
}
