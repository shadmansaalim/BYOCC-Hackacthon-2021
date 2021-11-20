import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import {
  Text,
  Box,
  Container,
  Button,
  VStack,
  useDisclosure,
} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

import PrivateRoute from "src/PrivateRoute/PrivateRoute"
import { PlainCard } from "@components/LoyaltyCard"
import CodeModal from "@components/CodeModal"
import { updateStampCount } from "@utils/updateStampCount"

import useAuth from "src/hooks/useAuth"

const cards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [stamps, setStamps] = useState(0)
  console.log(stamps)

  const business = {
    name: "Starbucks",
    descrip:
      "Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet",
    avgRating: 4,
    img: "https://bit.ly/2Z4KKcF",
  }

  return (
    <PrivateRoute>
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

        <VStack align='center' mt={5}>
          <PlainCard stamps={stamps} />
          <VStack align='center' mt={9}>
            <Button
              h='45px'
              w='350px'
              borderRadius='40px'
              colorScheme='success'
              onClick={onOpen}
            >
              Buy Coffee
            </Button>
            <Button h='45px' w='350px' borderRadius='40px' colorScheme='danger'>
              Remove Card
            </Button>
          </VStack>
        </VStack>
      </Container>
      <CodeModal
        isOpen={isOpen}
        onClose={onClose}
        updateStampCount={() => updateStampCount(stamps, setStamps, 9)}
      />
    </PrivateRoute>
  )
}

export default cards
