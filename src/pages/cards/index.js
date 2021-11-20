import { Text, Box, Container, Button, VStack } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

import { PlainCard } from "@components/LoyaltyCard"

const cards = () => {
  const business = {
    name: "Starbucks",
    descrip:
      "Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet",
    avgRating: 4,
    img: "https://bit.ly/2Z4KKcF",
  }

  return (
    <div>
      <Box
        height='10em'
        objectFit='cover'
        backgroundImage={business.img}
        backgroundPosition='center center'
      />

      <Container mt={4} maxW={{ base: "", lg: "container.lg" }}>
        <Box
          my={4}
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Text fontSize='3xl'>Starbucks</Text>
          <Box
            w='70px'
            p={1}
            borderRadius='40px'
            boxShadow='md'
            display='flex'
            justifyContent='space-around'
            alignItems='center'
          >
            <StarIcon color='black' />
            <span>4.5</span>
          </Box>
        </Box>

        <Box mt={5}>
          <Box align="center">
            <PlainCard mx='auto' />
          </Box>
          <VStack align="center" mt={9}>
          <Button
              h='45px'
              w='350px'
              borderRadius='40px'
              colorScheme='success'
            >
              Buy Coffee
            </Button>
            <Button h='45px' w='350px' borderRadius='40px' colorScheme='danger'>
              Remove Card
            </Button>
          </VStack>
          
        </Box>
      </Container>
    </div>
  )
}

export default cards
