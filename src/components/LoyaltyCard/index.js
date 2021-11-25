import { useState } from "react"
import _ from "lodash"
import {
  Box,
  Wrap,
  WrapItem,
  Grid,
  Text,
  Heading,
  Button,
  VStack,
  useDisclosure
} from "@chakra-ui/react"
import { GiCupcake } from "react-icons/gi"
import { AiOutlineCheck } from "react-icons/ai"
import { FaCoffee } from "react-icons/fa"
import { updateStampCount } from "@utils/updateStampCount"
import CodeModal from "@components/CodeModal"


export const CardBody = ({numStamps}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [stamps, setStamps] = useState(0)
  return(
    <Box>
    <VStack align='center' mt={5}>
    <>
      <Box
        px='28px'
        py='22px'
        w={{ base: "100%", sm: "400px" }}
        background="#171717"
        color='#fff'
        boxSizing='border-box'
        boxShadow='lg'
      >
        <Box letterSpacing='1px'>
          <Heading as='h2' size='lg' textTransform='uppercase'>
            Loyalty Card
          </Heading>
          <Text textTransform='uppercase' fontSize={15} fontWeight={100}>
            Sustainability starts with you
          </Text>
        </Box>

        <Wrap mt={4} spacing='15px' justify='start'>
          {_.range(0, numStamps).map((i) => (
            <WrapItem
              key={i}
              display='flex'
              justifyContent='center'
              alignItems='center'
              background='#fff'
              w='3.5rem'
              h='3.5rem'
              borderRadius='50px'
              color='#000'
            >
              {i <= stamps ? <AiOutlineCheck /> : ""}
            </WrapItem>
          ))}
          <WrapItem
            display='flex'
            alignItems='center'
            textAlign='center'
            border='1px solid #fff'
            w='3.5rem'
            h='3.5rem'
            borderRadius='50px'
            fontSize='.8em'
          >
            <span>Free Food!</span>
          </WrapItem>
        </Wrap>
      </Box>
    </>
          <VStack align='center' py={4}>
            <Button
              h='45px'
              w='350px'
              borderRadius='40px'
              colorScheme='success'
              onClick={onOpen}
            >
              Buy Coffee
            </Button>
            <Button h='45px' w='350px' borderRadius='40px' colorScheme='danger'>
              Remove Card
            </Button>
          </VStack>
        </VStack>
      <CodeModal
        isOpen={isOpen}
        onClose={onClose}
        updateStampCount={() => updateStampCount(stamps, setStamps, numStamps)}
      />
  </Box>
  )
}