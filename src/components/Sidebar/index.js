import { forwardRef } from "react";
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
} from "@chakra-ui/react";

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {
  return (
    <div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent background="#2f2a23" color="#fff">
          <DrawerCloseButton />
          <DrawerHeader>John Doe</DrawerHeader>

          <DrawerBody>
            <div>Hi</div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
});

export default Sidebar;
