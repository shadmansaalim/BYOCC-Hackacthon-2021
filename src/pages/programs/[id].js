import { VStack, Box, Text, Heading, Flex, Spacer , Container} from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { CircularProgress } from "@chakra-ui/progress"
import { PlainCard } from "@components/LoyaltyCard"
import { RatingCard } from "@components/RatingCard"
import { RatingForm } from "@components/RatingForm"
import axios from "axios"
import swal from "sweetalert"
import useAuth from "@hooks/useAuth"
import PrivateRoute from "src/PrivateRoute/PrivateRoute"

export default function BusinessDetails({ data: program }) {
  const { name, img, programName, organisationID,description,numStamps,freeItem} = program[0]
  const { user } = useAuth()

  const addProgram = async () => {
    // const program = organisation[0].programs[0]

    // const res = await axios.put(
    //   `http://localhost:3000/api/userData?email=${user.email}`,
    //   {
    //     organisationID: organisation[0].organisationID,
    //     programName: program.name,
    //     uniqueCode: "ABC4123",
    //     maxStamp: program.numStamps,
    //     numOfStamps: 0,
    //   }
    // )
    // if (res.data.modifiedCount > 0) {
    //   swal("Successfully Added", "Please check your Dashboard", "success")
    // }
  }
  return (
    <PrivateRoute>
      {program ? (
        <>
          <Box
            height='500px'
            backgroundSize='100% 100%'
            backgroundRepeat="no-repeat"
            backgroundImage="https://images.theconversation.com/files/122266/original/image-20160512-16422-cydk3l.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
            backgroundPosition='center center'
          />

        <Container maxW="container.xl" margin='50px auto'>
            <Flex direction='row' alignItems="center" justifyContent="space-between">
            <Heading as='h1' size='xl'>
                {programName}
            </Heading>
            <Button
              rightIcon={<AddIcon />}
              colorScheme='green'
              variant="outline"
              onClick={() => addProgram()}
            >
            <Text fontSize='xl' m="0">
              Add
            </Text>
            </Button>
          </Flex>



            <Text my={6}>
              {description}
            </Text>

            <Box align='center'>
              <PlainCard
              numStamps={numStamps}
              freeItem={freeItem}
              ></PlainCard>
            </Box>
            <Box mt={10}>
              <RatingForm />
            </Box>

            <Heading as='h3' size='lg' mt={10}>
              Reviews
            </Heading>
            <VStack>
              {/* {reviews.map((review, i) => {
                return <RatingCard key={i} review={review} />
              })} */}
            </VStack>
          </Container>
        </>
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
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3000/api/programs")
  const programs = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = programs.map((program) => ({
    params: { id: program._id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/programs/${params.id}`
  )
  const data = await res.json()

  return {
    props: { data },
  }
}
