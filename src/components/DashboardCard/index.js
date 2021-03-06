// import { useState } from "react";
import { Box, Image, Text,Button, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import { CardBody } from "@components/LoyaltyCard"
export const DashboardCard = ({ program,onClick}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {_id, name,description, img, avgRating, programName, programID,numStamps } = program
  const router = useRouter();
  return (
    <Box
      width="100%"
      height="100%"
      borderWidth='1px'
      borderRadius='lg'
      mx='auto'
      my='3'
      cursor="pointer"
      _hover={{
        transition: "0.2s ease-out",
        boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
        transform: "translate(0, -5px)",
      }}
      _active={{ boxShadow: "none", transform: "none" }}
      onClick={onClick || onOpen}
    >
      <Image
         width="100%"
        height="300px"
        objectFit="cover"
        src={img}
      />
      <Box p="3" textAlign="start" >
        <Box display='flex' justifyContent='space-between' my={3}>
          <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {programName}
          </Box>
          <Box display='flex' alignItems='center' px="3" py="1" borderRadius="20" boxShadow="xl" bg="rgb(56, 161, 105)">
          <Text fontSize="md" color="white" mr="2">
            4.0
          </Text>
            <StarIcon color='gold' my="0"/> 
          </Box>
        </Box>
        <Text fontSize="md">
            {description}
          </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{programName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CardBody 
            programID={programID}
            numStamps={numStamps}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    
    </Box>
  )
}