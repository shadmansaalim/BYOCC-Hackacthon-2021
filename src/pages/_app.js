import { ChakraProvider } from "@chakra-ui/react"
import AuthProvider from "../context/AuthProvider"

import Navbar from "@components/Navbar"
import "./app.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
