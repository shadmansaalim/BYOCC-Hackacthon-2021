import { useState } from "react";
import {
  Input,
  Button,
  Stack,
  Container,
  HStack,
  Link,
  Text
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";




export default function Login() {

  return (
    <div>
      <Container maxW="container.sm" textAlign="center" p={0} style={{
        backgroundColor: 'rgb(56, 161, 105)'
      }}>
        <Container p={5} style={{ color: 'white' }}>
          <Text fontSize="6xl" style={{ fontWeight: 'bold' }}>BYOC</Text>
          <Text fontSize="lg">Bring your own cup and enjoy rewards</Text>
        </Container>

        <form>
          <Stack bg="#EEEEEE" borderTopRadius="45" spacing={3} p={5}>
            <h3>Please Login To Continue</h3>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              bg="white"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              bg="white"
            />
            <Button type="submit" colorScheme="green">
              Login
            </Button>
            <Link color="green">Forgot Password?</Link>

            <p className="divider-text">
              <span style={{
                backgroundColor: 'white',

                borderRadius: '50%',
                padding: '6px'
              }}>OR</span>
            </p>

            <HStack style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                Facebook
              </Button>
              <Button colorScheme="red" leftIcon={<FaGoogle />}>
                Google
              </Button>
            </HStack>
            <label>New User?</label>
            <Button colorScheme="green" variant="outline">
              Create an Account
            </Button>
          </Stack>
        </form>
      </Container>
    </div >
  );
}
