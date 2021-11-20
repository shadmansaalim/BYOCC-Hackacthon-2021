import {
  Text,
  Box,
  Image,
  Container,
  Button,
  ButtonGroup,
} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

import { PlainCard } from "@components/LoyaltyCard"

const cards = () => {
  return (
    <div>
      <Image src='https://bit.ly/2Z4KKcF' />
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
        <PlainCard />

        <ButtonGroup
          h='150px'
          display='flex'
          alignItems='center'
          justifyContent='space-evenly'
          flexDirection='column'
          mt={9}
        >
          <Button h='45px' w='350px' borderRadius='40px' colorScheme='teal'>
            Buy Coffee
          </Button>
          <Button h='45px' w='350px' borderRadius='40px' colorScheme='danger'>
            Remove Card
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  )
}

export default cards
