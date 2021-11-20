import { VStack, Box, Text, Heading, Flex, Spacer } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { RatingCard } from "../../components/RatingCard"
import { AddIcon } from "@chakra-ui/icons"

export default function BusinessDetails() {
  const business = {
    name: "Starbucks",
    descrip: "Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit Business details Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    avgRating: 4,
    img: "https://bit.ly/2Z4KKcF"
  }
  const ratings = [
    {
      username: "Username",
      rating: 4,
      text: "Amazing place!",
      img: "https://bit.ly/dan-abramov"
    },
    {
      username: "Username2",
      rating: 1,
      text: "user review lorem ipsum dolor sit amet, consectetur adipiscing elit user review lorem ipsum dolor sit amet, consectetur adipiscing elit user review lorem ipsum dolor sit amet, consectetur adipiscing elit user review lorem ipsum dolor sit amet, consectetur adipiscing elit",
      img: "https://bit.ly/sage-adebayo"
    }
  ]
  return (
    <>
      <Box 
        height="10em"
        objectFit="cover"
        backgroundImage={business.img}
        backgroundPosition="center center"
      />

      <Box width="80%" margin="10px 10%">
        
        <Flex direction="row">
          <Heading as="h1" size="2xl">{business.name}</Heading>
          <Spacer />
          <Button leftIcon={<AddIcon />} colorScheme="green">Add</Button>
        </Flex>

        <Text p={5}>{business.descrip}</Text>
        <Heading as="h3" size="lg">Reviews</Heading>
        <VStack>
          {ratings.map((data, i)=>{
              return(
                <RatingCard key={i} ratingData={data}/>
              )
            })}
        </VStack>
      </Box>
      
      </>
  )
}