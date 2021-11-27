import { useRouter } from "next/router"
import { ChakraProvider } from "@chakra-ui/react"
import AuthProvider from "../context/AuthProvider"
import Navbar from "@components/Navbar"
import theme from "../theme"
import "./app.css"

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        {/* Not displaying navbar on login and signup page */}
        {router.pathname !== "/login" && router.pathname !== "/signup" && (
          <Navbar />
        )}
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp