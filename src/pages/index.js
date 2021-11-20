import Head from "next/head";
import { Container, Flex, Heading, Button } from "@chakra-ui/react";

import { Card1, Card2, Card3 } from "../components/LoyaltyCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { logOut } = useAuth();
  return (
    <PrivateRoute>
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Container h="1500px" maxW="container.sm" textAlign="center">
          <Button
            colorScheme="blue"
            onClick={logOut}
          >
            Log Out
          </Button>
          <Heading size="3xl">Mockups</Heading>
          <Flex
            h="inherit"
            alignItems="center"
            justifyContent="space-evenly"
            flexDirection="column"
          >
            <Card1 />
            <Card2 />
            <Card3 />
          </Flex>
        </Container>
      </div>
    </PrivateRoute>
  );
}
