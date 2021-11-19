import { useState } from "react";
import {
  Input,
  Button,
  Stack,
  Container,
  Checkbox,
  Link,
  Text
} from "@chakra-ui/react";


export default function Signup() {
  
  return (
    <div>
      <Container bg="green" maxW="container.sm" textAlign="center" p={0} style={{
        backgroundColor: 'rgb(56, 161, 105)'
      }}>
        <Container p={5} style={{ color: 'white' }}>
          <Text fontSize="6xl" style={{ fontWeight: 'bold' }}>BYOC</Text>
          <Text fontSize="lg">Bring your own cup and enjoy rewards</Text>
        </Container>
        <form>
          <Stack bg="#EEEEEE" borderTopRadius="45" spacing={3} p={5}>
            <h4>Sign Up</h4>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              bg="white"
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              bg="white"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              bg="white"
              required
            />
            <Input
              type="text"
              placeholder="Address"
              name="address"
              bg="white"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              bg="white"
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              bg="white"
              required
            />
            <Checkbox colorScheme="green" required>
              I agree to the Terms and Conditions
            </Checkbox>
            <Button type="submit" colorScheme="green">
              Sign Up
            </Button>
            <label>Have an Account?</label>

            <Button
              colorScheme="green"
              variant="outline"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
}
