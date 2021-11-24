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
import { useEffect, useState } from "react"

export default function BusinessDetails({ data: program }) {
  const { name, img, banner, programName, programID, organisationID,description,numStamps,freeItem} = program[0]
  const { user } = useAuth()
  const [reviews,setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/reviews?organisationID=${organisationID}`)
    .then(res => res.json())
    .then(data => setReviews(data[0].reviews))
  },[])

  const addProgram = async () => {
    const res = await axios.put(
      `http://localhost:3000/api/userData?email=${user.email}`,
      {
        programID: programID,
        programName: name,
        uniqueCode: Math.floor((Math.random()*1000000)+1),
        maxStamp: numStamps,
        currentStampCount: 0,
      }
    )
    console.log(res.data)
    if (res.data.modifiedCount > 0) {
      swal("Successfully Added", "Please check your Dashboard", "success")
    }
  }
  return (
    <PrivateRoute>
      {program? (
        <>
          <Box
            height='600px'
            backgroundSize='100% 100%'
            backgroundRepeat="no-repeat"
            backgroundImage={banner}
            backgroundPosition='center center'
          />

        <Container maxW="container.xl" margin='auto'>

            <Box p={8} boxShadow="xl" marginTop="-130px" bg="rgb(56, 161, 105)" color="white" borderRadius="20"mx="auto"
            w={{ base: "100%", sm: "100%", md: "80%"}}
            >
            <Heading as='h1' size='xl'>
                {programName}
            </Heading>
           
            <Text my={6}>
              {description}
            </Text>

            <Box align='center' mt="6">
              <PlainCard
              numStamps={numStamps}
              freeItem={freeItem}
              ></PlainCard>
               <Button
               mt="4"
              color="black"
              onClick={() => addProgram()}
            >
            <Text fontSize='xl' m="0">
              Add Program
            </Text>
            </Button>
            </Box>
            </Box>

            
            <Box mt={10}>
              <RatingForm 
              id={organisationID}
              />
            </Box>
           {
             reviews.length > 0
             &&
             <>
             <Heading as='h3' size='lg' mt={10} mb={4}>
             Customer Feedbacks
             </Heading>
            <VStack>
            {reviews.map((review, i) => {
               return <RatingCard key={i} review={review} />
             })} 
            </VStack>
             </>
           }
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
