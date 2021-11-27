import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Text,
  Button,
} from "@chakra-ui/react"

function CodeModal({ isOpen, onClose, updateStampCount }) {
  const uniqueCode = "1234ABC"
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box mt={5}>
            <Text align='center'>User Unique Code:</Text>
            <Text fontSize='5xl' textAlign='center'>
              {uniqueCode}
            </Text>
            <Flex direction='row' mt={5} justify='center'>
              <Button
                width='400px'
                bg='#498741'
                color='white'
                onClick={() => {
                  onClose()
                  updateStampCount()
                }}
              >
                Done
              </Button>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CodeModal