import { VStack, Box, Text, Heading, Flex, Spacer } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { CircularProgress } from "@chakra-ui/progress"
import { PlainCard } from "@components/LoyaltyCard"
import { RatingCard } from "@components/RatingCard"
import { RatingForm } from "@components/RatingForm"

import axios from "axios"
import useAuth from "@hooks/useAuth"
import swal from "sweetalert"

import useAuth from "src/hooks/useAuth"

export default function BusinessDetails({ data: organisation }) {
  const { img, name, reviews } = organisation[0]
  const { user } = useAuth()

  const addProgram = async () => {
    const program = organisation[0].programs[0]

    const res = await axios.put(
      `http://localhost:3000/api/userData?email=${user.email}`,
      {
        organisationID: organisation[0].organisationID,
        programName: program.name,
        uniqueCode: "ABC4123",
        maxStamp: program.numStamps,
        numOfStamps: 0,
      }
    )
    if (res.data.modifiedCount > 0) {
      swal("Successfully Added", "Please check your Dashboard", "success")
    }
  }
  return (
    <PrivateRoute>
      {organisation ? (
        <>
          <Box
            height='10em'
            objectFit='cover'
            backgroundImage={img}
            backgroundPosition='center center'
          />

          <Box width='80%' margin='10px 10%'>
            <Flex direction='row'>
              <Heading as='h1' size='2xl'>
                {name}
              </Heading>
              <Spacer />
              <Button
                leftIcon={<AddIcon />}
                colorScheme='green'
                onClick={() => addProgram()}
              >
                Add
              </Button>
            </Flex>

            <Text p={5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              dolor eos tempora nostrum.
            </Text>

            <Box align='center'>
              <PlainCard />
            </Box>
            <Box mt={10}>
              <RatingForm />
            </Box>

            <Heading as='h3' size='lg' mt={10}>
              Reviews
            </Heading>
            <VStack>
              {reviews.map((review, i) => {
                return <RatingCard key={i} review={review} />
              })}
            </VStack>
          </Box>
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
  const res = await fetch("http://localhost:3000/api/organisation")
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
    `http://localhost:3000/api/organisationdetails/${params.id}`
  )
  const data = await res.json()

  return {
    props: { data },
  }
}
