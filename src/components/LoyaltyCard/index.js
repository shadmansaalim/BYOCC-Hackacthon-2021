import { useState } from "react";
import _ from "lodash";
import { Box, Grid, Text, Heading, Button } from "@chakra-ui/react";
import { GiCupcake } from "react-icons/gi";
import { AiOutlineCheck } from "react-icons/ai";
import { FaCoffee } from "react-icons/fa";

import { updateStampCount } from "../../utils/updateStampCount";

export const Card1 = () => {
  const [stamps, setStamps] = useState(0);

  return (
    <>
      <Box
        p="28px"
        // w="500px"
        w={{ base: "400px", lg: "500px" }}
        background="#171717"
        color="#fff"
        boxSizing="border-box"
        boxShadow="lg"
      >
        <Box letterSpacing="1px">
          <Heading as="h2" size="lg" textTransform="uppercase">
            Loyalty Card
          </Heading>
          <Text textTransform="uppercase" fontSize={15} fontWeight={100}>
            Sustainability starts with you
          </Text>
        </Box>

        <Grid
          my={7}
          templateColumns="repeat(5, 1fr)"
          rowGap="20px"
          columnGap="15px"
        >
          {_.range(1, 10).map((i) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={i}
              background="#fff"
              w="3.5rem"
              h="3.5rem"
              borderRadius="50px"
              color="#000"
            >
              {i <= stamps ? <AiOutlineCheck /> : ""}
            </Box>
          ))}
          {/* Some duplication here. Can this be fixed? */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid #fff"
            w="3.5rem"
            h="3.5rem"
            borderRadius="50px"
            fontSize=".8em"
          >
            Free coffee!
          </Box>
        </Grid>
      </Box>
      <Button
        colorScheme="teal"
        onClick={() => updateStampCount(stamps, setStamps, 9)}
      >
        Buy coffee
      </Button>
    </>
  );
};

export const Card2 = () => {
  const [stamps, setStamps] = useState(0);

  return (
    <>
      <Box
        p="18px"
        w={{ base: "400px", lg: "500px" }}
        bgGradient="linear(to-t, #13f1fc, #036ed9)"
        color="#fff"
        boxSizing="border-box"
      >
        <Box letterSpacing="1px" w="280px">
          <Text
            fontFamily="Helvetica, sans-serif"
            textTransform="uppercase"
            textAlign="left"
            fontSize=".9rem"
          >
            Buy 5 coffes get a free muffin on the 6th!
          </Text>
        </Box>
        <Grid my={7} templateColumns="repeat(6, 1fr)" columnGap="15px">
          {_.range(1, 6).map((i) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={i}
              background="#fff"
              w="3rem"
              h="3rem"
              borderRadius="50px"
              color="#000"
            >
              {i <= stamps ? <AiOutlineCheck /> : ""}
            </Box>
          ))}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid #fff"
            w="3rem"
            h="3rem"
            borderRadius="50px"
            fontSize="1rem"
          >
            <GiCupcake />
          </Box>
        </Grid>
        <Text textTransform="uppercase" textAlign="right" fontSize="1.5rem">
          AWESOME BUSINESS
        </Text>
      </Box>
      <Button
        colorScheme="teal"
        onClick={() => updateStampCount(stamps, setStamps, 5)}
      >
        Buy coffee
      </Button>
    </>
  );
};

export const Card3 = () => {
  const [stamps, setStamps] = useState(0);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        p="24px"
        h="500px"
        w={{ base: "320px", lg: "350px" }}
        background="#fffef2"
        boxSizing="border-box"
      >
        <Box letterSpacing="1px" w="280px">
          <Text
            fontFamily="Helvetica, sans-serif"
            textTransform="uppercase"
            textAlign="left"
          >
            Thank you for your loyalty
          </Text>
        </Box>
        <Grid
          my={2}
          templateColumns="repeat(3, 1fr)"
          rowGap="20px"
          columnGap="15px"
        >
          {_.range(1, 10).map((i) => (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={i}
              color="#000"
            >
              <Text fontSize="45px" color={i <= stamps ? "#7986cb" : "#d4d4d4"}>
                <FaCoffee />
              </Text>
            </Box>
          ))}
        </Grid>
        <Box
          display="flex"
          position="relative"
          justifyContent="center"
          alignItems="center"
          h={10}
          width="65%"
          background="#ff933b"
          fontWeight={700}
          fontFamily="Dancing Script, cursive"
          fontSize="25px"
          color="#fff"
          _before={{
            content: '""',
            position: "relative",
            left: { base: "162px", lg: "168px" },
            borderRight: "20px solid transparent",
            borderLeft: "20px solid transparent",
            borderTop: "20px solid #ff933b",
            borderBottom: "20px solid #ff933b",
          }}
          _after={{
            content: '""',
            position: "relative",
            left: { base: "-162px", lg: "-168px" },
            borderRight: "20px solid transparent",
            borderLeft: "20px solid transparent",
            borderTop: "20px solid #ff933b",
            borderBottom: "20px solid #ff933b",
          }}
        >
          Free Coffee
        </Box>

        <Text fontSize="45px" color="#9fa8da">
          <FaCoffee />
        </Text>

        <Box className="footer">
          <Text textTransform="uppercase" fontSize={25} fontWeight={700}>
            RAD BUSINESS
          </Text>
          <Text textTransform="uppercase" fontSize={15} fontWeight={700}>
            123 Random Street
          </Text>
        </Box>
      </Box>
      <Button
        colorScheme="teal"
        onClick={() => updateStampCount(stamps, setStamps, 9)}
      >
        Buy coffee
      </Button>
    </>
  );
};
