import { Box, Stack, Text } from "@chakra-ui/react"

const AuthContainer = ({ children, handleSubmit }) => {
  return (
    <Box
      minHeight="100vh"
      textAlign='center'
      backgroundColor='rgb(56, 161, 105)'
      color='#fff'
    >
      <Box color='#fff' height="140px">
        <Text fontSize='6xl' fontWeight='bold'>
          BYOCC
        </Text>
        <Text fontSize='lg'>Bring your own cup and enjoy rewards</Text>
      </Box>

      <Box
        as='form'
        display='flex'
        justifyContent='center'
        alignItems='center'
        color='white'
        h="calc(100vh - 140px)"
        onSubmit={handleSubmit}
      >
        <Stack
          bg='#eee'
          color='#000'
          borderTopRadius='40'
          w={{ base: "100%", sm: "85%", md: "65%", lg: "40%" }}
          spacing={3}
          px={7}
          py={30}
          minHeight="100%"
        >
          {children}
        </Stack>
      </Box>
    </Box>
  )
}

export default AuthContainer
