import { Box, Button, Text, Image, VStack, HStack} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const RatingCard = ({ ratingData }) => {
  return (
    <Box
      width="100%"
      borderWidth='1px'
      borderRadius='lg'
      display="flex"
      p={3}
      m="0.5em"
      alignItems="center"
    >
      <Image
        borderRadius="full"
        src={ratingData.img}
        boxSize="4em"
        minWidth="4em"
      />
      <VStack alignItems="left" ml="2em">
        <Text fontSize="md" fontWeight="bold">{ratingData.username}</Text>
        <Box>
          {[...Array(5)].map((_, i) => {
            return (
              <StarIcon
              color={i < ratingData.rating ? "green" : "gray.300"}
              />
            )
          })}
        </Box>
        <Text>
          {ratingData.text}
        </Text>
      </VStack>
      
    </Box>
  ) 

}