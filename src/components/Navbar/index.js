import { useRef } from "react"
import { Box, IconButton, Heading, Link, useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

import Sidebar from "@components/Sidebar"

const Navbar = () => {
  const btnRef = useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        px='20px'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        background='#292b2c'
        height='50px'
        width='100%'
        color='#fff'
      >
        <Heading>
          <Link href='/' _hover='none' _active='none'>
            BYOCC
          </Link>
        </Heading>
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          background='transparent'
          aria-label='Search database'
          borderRadius='none'
          w='25px'
          h='100%'
          fontSize='40px'
          icon={<HamburgerIcon color='#fff' />}
          _hover='none'
          _active='none'
        />
      </Box>
      <Sidebar ref={btnRef} isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Navbar
