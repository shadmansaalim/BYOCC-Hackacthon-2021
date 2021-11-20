import { Box, Circle, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const SearchCard = () => {
  const organisation = {
    name: "Organisation Name",
    imageUrl: "https://bit.ly/2Z4KKcF",
    reviews: [
      { text: "review1", rating: 4 },
      { text: "review2", rating: 5 }
    ],
    avgRating: 4
  };

  return (
    <Box as="button" minW="sm" borderWidth="1px" borderRadius="lg" m="3">
      <Box
        height="100px"
        width="100%"
        backgroundImage={organisation.imageUrl}
        backgroundPosition="center center"
      />
      <Box p="3">
        <Box display="flex" justifyContent="space-between">
          <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {organisation.name}
            <br />
            <Box textAlign="left">
              <StarIcon color="black" />
              <Box as="span" ml={2}>
                {organisation.avgRating.toFixed(1)}
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Button borderRadius="100" bg="green" color="white">
              +
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
