import { Box, Stack, Text } from "@chakra-ui/react"

const AuthContainer = ({ children, handleSubmit }) => {
  return (
   <Box 
   display='flex'
   justifyContent='center'
   alignItems='center'
   height="100vh"
   backgroundColor='rgb(56, 161, 105)'
   color='#fff'
   textAlign="center"
   >
      <Box width="100%">
      <Box color='#fff' mb={4}>
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
        onSubmit={handleSubmit}
       
      >
        <Stack
          bg='#eee'
          color='#000'
          borderRadius='20'
          spacing={3}
          px={12}
          pt={12}
          pb={24}
          w={{ base: "100%", sm: "85%", md: "50%", xl: "32%" }}
        >
          {children}
        </Stack>
      </Box>
    </Box>
   </Box>
  )
}

export default AuthContainer
