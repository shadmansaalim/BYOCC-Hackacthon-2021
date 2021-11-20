import { Box, Stack, Text } from "@chakra-ui/react"

const AuthContainer = ({ children, handleSubmit }) => {
  return (
    <Box
      h='100%'
      textAlign='center'
      backgroundColor='rgb(56, 161, 105)'
      color='#fff'
    >
      <Box color='#000'>
        <Text fontSize='6xl' fontWeight='bold' color='#212121'>
          BYOCC
        </Text>
        <Text fontSize='lg'>Bring your own cup and enjoy rewards</Text>
      </Box>

      <Box
        as='form'
        display='flex'
        justifyContent='center'
        alignItems='center'
        mt={7}
        color='white'
        h='100%'
        onSubmit={handleSubmit}
      >
        <Stack
          bg='#EEEEEE'
          color='#000'
          borderTopRadius='40'
          w={{ base: "100%", sm: "85%", md: "65%", lg: "40%" }}
          spacing={3}
          px={7}
          py={30}
        >
          {children}
        </Stack>
      </Box>
    </Box>
  )
}

export default AuthContainer
