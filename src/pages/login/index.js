import { useRouter } from "next/router"
import { useState } from "react"
import {
  Input,
  Button,
  Stack,
  Container,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa"

import useAuth from "@hooks/useAuth"

export default function Login() {
  const router = useRouter()
  const [loginData, setLoginData] = useState({})
  const {
    user,
    loginUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
  } = useAuth()

  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLoginData = { ...loginData }
    newLoginData[field] = value
    setLoginData(newLoginData)
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    loginUser(loginData.email, loginData.password, router)
  }

  return (
    <div>
      <Container
        maxW='container.sm'
        textAlign='center'
        p={0}
        backgroundColor='rgb(56, 161, 105)'
      >
        <Container p={5} color='white'>
          <Text fontSize='6xl' fontWeight='bold'>
            BYOC
          </Text>
          <Text fontSize='lg'>Bring your own cup and enjoy rewards</Text>
        </Container>

        <form onSubmit={handleLoginSubmit}>
          <Stack bg='#EEEEEE' borderTopRadius='45' spacing={3} p={5}>
            <h3>Please Login To Continue</h3>
            <Input
              type='email'
              placeholder='Email'
              name='email'
              onBlur={handleOnBlur}
              bg='white'
            />
            <Input
              type='password'
              name='password'
              placeholder='Password'
              onBlur={handleOnBlur}
              bg='white'
            />
            <Button type='submit' colorScheme='green'>
              Login
            </Button>
            <Link color='green'>Forgot Password?</Link>

            <p className='divider-text'>
              <span
                style={{
                  backgroundColor: "white",

                  borderRadius: "50%",
                  padding: "6px",
                }}
              >
                OR
              </span>
            </p>

            <HStack
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => signInWithFacebook(router)}
                colorScheme='facebook'
                leftIcon={<FaFacebook />}
              >
                Facebook
              </Button>
              <Button
                onClick={() => signInWithGoogle(router)}
                colorScheme='red'
                leftIcon={<FaGoogle />}
              >
                Google
              </Button>
              {/* <Button onClick={() => signInWithTwitter(router)} colorScheme="twitter" leftIcon={<FaTwitter />}>
                Twitter
              </Button> */}
            </HStack>

            <label>New User?</label>
            <Button
              colorScheme='green'
              variant='outline'
              onClick={() => router.push("/signup")}
            >
              Create an Account
            </Button>
          </Stack>
        </form>
      </Container>
    </div>
  )
}
