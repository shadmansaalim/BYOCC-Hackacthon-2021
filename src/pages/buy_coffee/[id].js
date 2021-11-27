import {
  Container,
  Button,
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { CircularProgress } from '@chakra-ui/progress';

export default function BuyCoffee() {
<<<<<<< HEAD:src/pages/buy_coffee/[id].js
  const [organisation,setOrganisation] = useState({});
  const {img,name,reviews,avgRating} = organisation;

  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    fetch(`http://localhost:3000/api/organisationdetails/${id}`)
    .then(res => res.json())
    .then(data => setOrganisation(data[0]))
  },[id])

=======
  const business = {
    name: "Starbucks",
    descrip:
      "Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet",
    avgRating: 4,
    img: "https://bit.ly/2Z4KKcF",
  }
  const uniqueCode = "1234ABC"
>>>>>>> 416511707a4a8ef99b4f73b07622fabf8fd3a271:src/pages/buy_coffee/index.js

  return (
    <div s>
      {
        organisation.name
        ?
        <>
        <Box
        height='10em'
        objectFit='cover'
        backgroundImage={img}
        backgroundPosition='center center'
      />

      <Box width='80%' margin='10px 10%'>
        <Flex direction='row' alignItems='center'>
          <Heading as='h1' size='2xl'>
            {name}
          </Heading>

          <Spacer />
<<<<<<< HEAD:src/pages/buy_coffee/[id].js
          
          <Box style={ {boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)"}} p={3} borderRadius="10px" display="flex" alignItems="center">
            <StarIcon color='black' mr="2"/>
            <Box as='span'>{avgRating.toFixed(1)}</Box>
=======

          <Box
            style={{ boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)" }}
            p={3}
            borderRadius='10px'
            display='flex'
            alignItems='center'
          >
            <StarIcon color='black' mr='2' />
            <Box as='span'> {business.avgRating.toFixed(1)}</Box>
>>>>>>> 416511707a4a8ef99b4f73b07622fabf8fd3a271:src/pages/buy_coffee/index.js
          </Box>
        </Flex>

        <Text mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium odio quidem, tenetur nisi iure optio fugit sequi debitis repellat omnis harum natus doloribus iusto, necessitatibus asperiores neque ipsum ipsa!</Text>

        <Box mt={5}>
          <form>
            <Text align='center'>User Unique Code:</Text>
            <Text fontSize='5xl' textAlign='center'>
              {uniqueCode}
            </Text>
            <Flex direction='row' mt={5} justify='center'>
              <Button width='400px' bg='#498741' color='white'>
                Done
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
        </>
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
    </div>
  )
}
