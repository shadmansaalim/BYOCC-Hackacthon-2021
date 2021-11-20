import {
  Text,
  Box,
  Container,
  Button,
  ButtonGroup,
} from "@chakra-ui/react"
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
          <Box>
            <PlainCard mx='auto' />
          </Box>

          <ButtonGroup
            h='150px'
            display='flex'
            alignItems='center'
            justifyContent='space-evenly'
            flexDirection='column'
            mt={9}
          >
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
          </ButtonGroup>
          {/* <form>
            <Text align='center'>User Unique Code:</Text>
            <Text fontSize="5xl" textAlign='center'>{uniqueCode}</Text>
            <Flex direction='row' mt={5} justify='center'>
              
              <Button width='400px' bg='#498741' color='white'>
                Done
              </Button>
            </Flex>
          </form> */}
        </Box>
      </Container>
    </div>
  )
}

export default cards
