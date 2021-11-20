import Head from "next/head"
import { Container, Flex, Heading, Button } from "@chakra-ui/react"

import Navbar from "@components/Navbar"
import { Card1, Card2, Card3 } from "@components/LoyaltyCard"

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navbar />
      <Container h='1500px' maxW='container.sm' textAlign='center'>
        <Heading size='3xl'>Mockups</Heading>
        <Flex
          h='inherit'
          alignItems='center'
          justifyContent='space-evenly'
          flexDirection='column'
        >
          <Card1 />
          <Card2 />
          <Card3 />
        </Flex>
      </Container>
    </div>
  )
}
