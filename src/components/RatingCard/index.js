import { Box, Text, Image, VStack, Avatar } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

export const RatingCard = ({ review }) => {
  return (
    <Box
      width='100%'
      borderWidth='1px'
      borderRadius='lg'
      display='flex'
      p={3}
      alignItems='center'
    >
      {review.img ? (
        <Image
          borderRadius='full'
          src={review.img}
          boxSize='4em'
          minWidth='4em'
        />
      ) : (
        <Avatar name={review.name} mt='2' size='lg' />
      )}

      <VStack alignItems='left' ml='2em'>
        <Text fontSize='md' fontWeight='bold'>
          {review.name}
        </Text>
        {/*
         */}
        <Box>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              color={i < review.rating ? "gold" : "gray.300"}
            />
          ))}
        </Box>
        <Text>{review.text}</Text>
      </VStack>
    </Box>
  )
}
