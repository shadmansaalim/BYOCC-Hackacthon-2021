import Head from "next/head"
import { Container, Flex, Heading } from "@chakra-ui/react"

import { PlainCard, GradientCard, FancyCard } from "@components/LoyaltyCard"

import PrivateRoute from "../PrivateRoute/PrivateRoute"

export default function Home() {
  return (
    <PrivateRoute>
      <div>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap'
            rel='stylesheet'
          />
        </Head>
        <Container h='1500px' maxW='container.sm' textAlign='center'>
          <Heading size='3xl'>Mockups</Heading>
          <Flex
            h='inherit'
            alignItems='center'
            justifyContent='space-evenly'
            flexDirection='column'
          >
            <PlainCard />
            <GradientCard />
            <FancyCard />
          </Flex>
        </Container>
      </div>
    </PrivateRoute>
  )
}