// import { useState } from "react";
import { Box, Image } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

export const DashboardCard = ({ organisation,onClick}) => {
  const {_id, name, img, avgRating } = organisation
  const router = useRouter();
  return (
    <Box
      as='button'
      width="100%"
      borderWidth='1px'
      borderRadius='lg'
      mx='auto'
      my='3'
      _hover={{
        transition: "0.2s ease-out",
        boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
        transform: "translate(0, -5px)",
      }}
      _active={{ boxShadow: "none", transform: "none" }}
      onClick={onClick}
    >
      <Image
        width='100%'
        objectFit="cover"
        src={img}
      />
      <Box p='3'>
        <Box display='flex' justifyContent='space-between'>
          <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated>
            {name}
          </Box>
          <Box display='flex' alignItems='center'>
            <StarIcon color='black' />
            <Box as='span' ml='2'>
              {avgRating.toFixed(1)}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
