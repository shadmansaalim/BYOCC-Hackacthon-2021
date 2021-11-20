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
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons"

export default function Signup() {
  const router = useRouter();

  const [signUpData, setSignUpData] = useState({});
  const { registerUser } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignUpData = { ...signUpData };
    newSignUpData[field] = value;
    setSignUpData(newSignUpData);
  }

  const handleSignUpSubmit = e => {
    e.preventDefault();
    if (signUpData.password !== signUpData.confirmPassword) {
      swal("Passwords doesn't match!", "Please check password and then try again", "error");

    }
    else {
      registerUser(signUpData.firstName, signUpData.lastName, signUpData.email, signUpData.address, signUpData.password, router);
      e.target.reset();
    }

  }




  return (
    <div>
      <Container bg="green" maxW="container.sm" textAlign="center" p={0} style={{
        backgroundColor: 'rgb(56, 161, 105)'
      }}>
        <Container p={5} style={{ color: 'white' }}>
          <Text fontSize="6xl" style={{ fontWeight: 'bold' }}>BYOC</Text>
          <Text fontSize="lg">Bring your own cup and enjoy rewards</Text>
        </Container>
        <form onSubmit={handleSignUpSubmit}>
          <Stack bg="#EEEEEE" borderTopRadius="45" spacing={3} p={5}>
            <h4>Sign Up</h4>
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              onBlur={handleOnBlur}
              bg="white"
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onBlur={handleOnBlur}
              bg="white"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onBlur={handleOnBlur}
              bg="white"
              required
            />
            <Input
              type="text"
              placeholder="Address"
              name="address"
              onBlur={handleOnBlur}
              bg="white"
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onBlur={handleOnBlur}
              bg="white"
              required
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onBlur={handleOnBlur}
              bg="white"
              required
            />
            <Checkbox colorScheme="green" required>
              I agree to the Terms and Conditions
            </Checkbox>
            <Button type="submit" colorScheme="green">
            Sign Up <FontAwesomeIcon icon={faUserPlus} style={{marginLeft: '4px'}}/>
            </Button>
            <label>Have an Account?</label>

            <Button
              colorScheme="green"
              variant="outline"
              onClick={() => router.push("/login")}
            >
              Login <FontAwesomeIcon icon={faSignInAlt} style={{marginLeft: '4px'}}/>
            </Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
}
