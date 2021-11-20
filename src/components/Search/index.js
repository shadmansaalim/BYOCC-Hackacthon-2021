// import { useState } from "react";
import { Box, Circle, Container, Link, Spacer, Heading, Flex, IconButton } from "@chakra-ui/react"
import { StarIcon, PlusSquareIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import { route } from "next/dist/server/router"

export const SearchCard = ({ cardData }) => {
  console.log(cardData)
  const {_id,img,name, avgRating} = cardData
 const router = useRouter();
  return (
    <Box
      width="95%"
      borderWidth='1px'
      borderRadius='lg'
      m="2.5%"
      onClick={() => router.push(`/organisationdetails/${_id}`)}
    >
      <Box
        height='100px'
        width='100%'
        backgroundImage={img}
        backgroundPosition='center center'
      />
      <Box p='3'>
          <Flex direction="row">
            <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
              {name}
              <Box textAlign="left" display='flex' alignItems='center'>
                <StarIcon color='black' size="xs" />
                <Box as='span' ml='2' fontWeight="normal"> {avgRating.toFixed(1)}</Box>
              </Box>
            </Box>
            <Spacer />
            <IconButton 
              colorScheme="green"
              icon={<AddIcon/>}
              borderRadius="full"
              onClick={() => router.push(`/buy_coffee/${_id}`)}
            />
          </Flex>
        
      </Box>
    </Box>
  )
}
