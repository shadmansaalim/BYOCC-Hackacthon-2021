import { Box, Spacer, Flex, IconButton } from "@chakra-ui/react"
import { AddIcon, StarIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

export const SearchCard = ({ cardData }) => {
  const { _id, img, name, avgRating } = cardData

  const router = useRouter()
  return (
    <Box
      width='95%'
      borderWidth='1px'
      borderRadius='lg'
      m='2.5%'
      onClick={() => router.push(`/programs/${_id}`)}
    >
      <Box
        height='100px'
        width='100%'
        backgroundImage={img}
        backgroundPosition='center center'
      />
      <Box p='3'>
        <Flex direction='row'>
          <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {name}
            <Box textAlign='left' display='flex' alignItems='center'>
              <StarIcon color='black' size='xs' />
              <Box as='span' ml='2' fontWeight='normal'>
                {avgRating.toFixed(1)}
              </Box>
            </Box>
<<<<<<< HEAD
            <Spacer />
            <IconButton 
              colorScheme="green"
              icon={<AddIcon/>}
              borderRadius="full"
              onClick={() => router.push(`/buy_coffee/${_id}`)}
            />
          </Flex>
        
=======
          </Box>
          <Spacer />
          <IconButton
            colorScheme='green'
            icon={<AddIcon />}
            borderRadius='full'
            onClick={() => router.push("/buy_coffee")}
          />
        </Flex>
>>>>>>> 416511707a4a8ef99b4f73b07622fabf8fd3a271
      </Box>
    </Box>
  )
}
