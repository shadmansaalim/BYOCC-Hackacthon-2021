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

const cards = ({ data: program }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [stamps, setStamps] = useState(0)
  const { name, img, banner, programName, programID, organisationID,description,numStamps,freeItem} = program[0]


  return (
    <PrivateRoute>
      <Box
        height='600px'
        backgroundSize='100% 100%'
        backgroundRepeat="no-repeat"
        backgroundImage={banner}
        backgroundPosition='center center'
      />

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

        
    </PrivateRoute>
  )
}
export default cards

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