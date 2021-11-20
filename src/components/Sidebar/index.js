import { forwardRef } from "react"
import { useRouter } from "next/router"
import {
  Box,
  IconButton,
  Text,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  Link,
} from "@chakra-ui/react"
import _ from "lodash"
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi"

import useAuth from "@hooks/useAuth"

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {
  const { logOut } = useAuth()
  const router = useRouter()

  const routes = [
    {
      name: "programs",
      href: "/programs",
      icon: <HiOutlineHeart />,
    },
    {
      name: "dashboard",
      href: "",
      icon: <HiOutlineUser />,
    },
  ]
  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent background='#2f2a23' color='#fff'>
          <DrawerCloseButton />
          <DrawerHeader
            display='flex'
            alignItems='center'
            justifyContent='space-around'
          >
            <Avatar name='John Doe' />
            John Doe
          </DrawerHeader>

          <DrawerBody>
            {routes.map(({ name, href, icon }) => (
              <Link
                key={name}
                display='flex'
                alignItems='center'
                px={2}
                py={1}
                rounded='md'
                _hover={{
                  textDecoration: "none",
                }}
                href={href}
                fontSize='1.3rem'
              >
                {icon}
                <Text ml={4}>{_.upperFirst(name)}</Text>
              </Link>
            ))}
          </DrawerBody>
          <DrawerFooter
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Button
              variant='outline'
              onClick={() => {
                logOut()
                router.push("/")
              }}
            >
              Log Out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
})

export default Sidebar
