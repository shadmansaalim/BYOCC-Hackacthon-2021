import { forwardRef } from "react"
import { useRouter } from "next/router"
import {
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
  Image,
} from "@chakra-ui/react"
import _ from "lodash"
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi"
import { AiOutlineIdcard } from "react-icons/ai"

import useAuth from "@hooks/useAuth"

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {
  const { logOut } = useAuth()
  const router = useRouter()
  const { user } = useAuth()

  const routes = [
    {
      name: "programs",
      href: "/programs",
      icon: <HiOutlineHeart />,
    },
    {
      name: "dashboard",
      href: "/dashboard",
      icon: <HiOutlineUser />,
    }
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
        <DrawerContent background='#292b2c' color='#fff'>
          <DrawerCloseButton />
          <DrawerHeader
            display='flex'
            alignItems='center'
            flexDirection='column'
            justifyContent='space-around'
          >
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                mt='12'
                size='xl'
                style={{ borderRadius: "50%" }}
              />
            ) : (
              <Avatar name={user.displayName} mt='12' size='lg' />
            )}
            <Text fontSize='xl' mt='4'>
              {user.displayName}
            </Text>
          </DrawerHeader>

          <DrawerBody>
            {routes.map(({ name, href, icon }) => (
              <Link href={href} key={name}>
                <Button
                  size='md'
                  height='48px'
                  mb='3'
                  border='2px'
                  borderColor='green.500'
                  display='flex'
                  alignItems='center'
                  style={{ color: "black", width: "100%" }}
                >
                  {icon}
                  <Text ml={5}>{_.upperFirst(name)}</Text>
                </Button>
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
                router.push("/login")
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