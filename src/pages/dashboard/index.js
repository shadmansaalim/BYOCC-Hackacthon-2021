import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { Grid, Text, Box, Flex, Spacer, Container } from "@chakra-ui/layout"
import { DashboardCard } from "@components/Dashboard"

export default function Dashboard() {
  const { user } = useAuth()
  const [programs, setPrograms] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/userProgram?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setPrograms(data))
  }, [user.email])

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
        {programs.map((program) => (
          <DashboardCard key={program._id} program={program}></DashboardCard>
        ))}
      </Grid>
    </Container>
  )
}
