// import { useState } from "react";
import { Box, Circle, Container, Link, Spacer, Heading, Flex, IconButton } from "@chakra-ui/react"
import { StarIcon, PlusSquareIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import { AddIcon } from "@chakra-ui/icons"

export const SearchCard = ({ cardData }) => {

  return (
    <Box
      width="95%"
      borderWidth='1px'
      borderRadius='lg'
      m="2.5%"
    >
      <Box
        height='100px'
        width='100%'
        backgroundImage={cardData.img}
        backgroundPosition='center center'
      />
      <Box p='3'>
          <Flex direction="row">
            <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
              {cardData.name}
              <Box textAlign="left" display='flex' alignItems='center'>
                <StarIcon color='black' size="xs" />
                <Box as='span' ml='2' fontWeight="normal"> {cardData.rating.toFixed(1)}</Box>
              </Box>
            </Box>
            <Spacer />
            <IconButton 
              colorScheme="green"
              icon={<AddIcon/>}
              borderRadius="full"
            />
          </Flex>
        
      </Box>
    </Box>
  )
}
