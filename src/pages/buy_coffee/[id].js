import { Container, Box, Text, Heading, Flex, Spacer } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { StarIcon } from "@chakra-ui/icons"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function BuyCoffee() {
  const [organisation,setOrganisation] = useState({});
  const {img,name,reviews,avgRating} = organisation;

  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    fetch(`http://localhost:3000/api/buyCoffee/${id}`)
    .then(res => res.json())
    .then(data => console.log(data[0]))
  },[id])


  return (
    <>
      <Box
        height='10em'
        objectFit='cover'
        backgroundImage={img}
        backgroundPosition='center center'
      />

      <Box width='80%' margin='10px 10%'>
        <Flex direction='row' alignItems="center">
          <Heading as='h1' size='2xl'>
            {name}
          </Heading>

          <Spacer />
          
          <Box style={ {boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)"}} p={3} borderRadius="10px" display="flex" alignItems="center">
            <StarIcon color='black' mr="2"/>
            <Box as='span'></Box>
          </Box>
          
        </Flex>

        <Text mt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium odio quidem, tenetur nisi iure optio fugit sequi debitis repellat omnis harum natus doloribus iusto, necessitatibus asperiores neque ipsum ipsa!</Text>

        <Box mt={5}>
          <form>
            <Input textAlign='center' placeholder='Enter code' />
            <Flex direction='row' mt={5} justify='center'>
              <Button width='200px' bg='#D32222' color='white' mr={2}>
                Cancel
              </Button>
              <Button width='200px' bg='#498741' color='white'>
                Add
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  )
}
