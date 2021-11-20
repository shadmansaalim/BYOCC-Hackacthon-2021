import { VStack, Box, Text, Heading, Flex, Spacer } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { RatingCard } from "../../components/RatingCard"
import { AddIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { CircularProgress } from '@chakra-ui/progress';

export default function BusinessDetails() {
  const [organisation,setOrganisation] = useState({});
  const {img,name,reviews} = organisation;

  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    fetch(`http://localhost:3000/api/organisationdetails/${id}`)
    .then(res => res.json())
    .then(data => setOrganisation(data[0]))
  },[id])
 
 
  return (
    <div>
       {
         organisation?.name
         ?
         <>
         <Box 
        height="10em"
        objectFit="cover"
        backgroundImage={img}
        backgroundPosition="center center"
      />

      <Box width="80%" margin="10px 10%">
        
        <Flex direction="row">
          <Heading as="h1" size="2xl">{name}</Heading>
          <Spacer />
          <Button leftIcon={<AddIcon />} colorScheme="green">Add</Button>
        </Flex>

        <Text p={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor eos tempora nostrum? Corrupti obcaecati animi corporis consequatur, consequuntur veritatis fuga aspernatur perspiciatis itaque exercitationem, expedita natus laboriosam quod voluptatum.</Text>
        <Heading as="h3" size="lg">Reviews</Heading>
        <VStack>
          {reviews.map((review, i)=>{
              return(
                <RatingCard key={i} review={review}/>
              )
            })}
        </VStack>
      </Box>
         </>
      :
      <div style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <CircularProgress isIndeterminate color="green.300" />
    </div>
       }      
    </div>
  )
}