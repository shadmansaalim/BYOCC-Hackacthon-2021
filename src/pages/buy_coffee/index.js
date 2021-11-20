import { Container, Box, Text, Heading, Flex, Spacer } from "@chakra-ui/layout"
import { Input } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { StarIcon } from "@chakra-ui/icons"

export default function BuyCoffee() {
  const business = {
    name: "Starbucks",
    descrip:
      "Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet",
    avgRating: 4,
    img: "https://bit.ly/2Z4KKcF",
  }
  const uniqueCode = "1234ABC";

  return (
    <>
      <Box
        height='10em'
        objectFit='cover'
        backgroundImage={business.img}
        backgroundPosition='center center'
      />

      <Box width='80%' margin='10px 10%'>
        <Flex direction='row' alignItems="center">
          <Heading as='h1' size='2xl'>
            {business.name}
          </Heading>

          <Spacer />
          
          <Box style={ {boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)"}} p={3} borderRadius="10px" display="flex" alignItems="center">
            <StarIcon color='black' mr="2"/>
            <Box as='span'> {business.avgRating.toFixed(1)}</Box>
          </Box>
          
        </Flex>

        <Text mt={2}>{business.descrip}</Text>

        <Box mt={5}>
          <form>
            <Text align='center'>User Unique Code:</Text>
            <Text fontSize="5xl" textAlign='center'>{uniqueCode}</Text>
            <Flex direction='row' mt={5} justify='center'>
              
              <Button width='400px' bg='#498741' color='white'>
                Done
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>
    </>
  )
}
