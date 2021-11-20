import { forwardRef } from "react"
import {
  Box,
  IconButton,
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

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {
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
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            John Doe
          </DrawerHeader>

          <DrawerBody>
            {routes.map(({ name, href, icon }) => (
              <Link
                display='flex'
                justifyContent='space-between'
                px={2}
                py={1}
                rounded='md'
                _hover={{
                  textDecoration: "none",
                }}
                href={href}
              >
                {icon}
                {_.upperFirst(name)}
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
})

export default Sidebar
