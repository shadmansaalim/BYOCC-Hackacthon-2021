// import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { StarIcon } from '@chakra-ui/icons'

export const DashboardCard = () => {
    const organisation = {
        name: "Organisation Name",
        imageUrl: "https://bit.ly/2Z4KKcF",
        reviews: [{text: "review1", rating: 4}, {text: "review2", rating: 5}],
        avgRating: 4
    }

    return (
        <Box as="button" minW="sm" borderWidth="1px" borderRadius="lg" m="3">
            <Box 
                height="100px" width="100%"
                backgroundImage={organisation.imageUrl}
                backgroundPosition="center center"
            />
            {/* <Image src={organisation.imageUrl} alt={organisation.imageAlt} height="100px" width="100%" /> */}
            <Box p="3">
                <Box display="flex" justifyContent="space-between">
                    <Box
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {organisation.name}
                    </Box>
                    <Box display="flex" alignItems="center">
                        <StarIcon color="teal" />
                        <Box as="span" ml="2">
                            {organisation.avgRating.toFixed(1)}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

