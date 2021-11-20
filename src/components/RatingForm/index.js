import { useState } from "react"
import { Box, Button, Text, Textarea } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"

export const RatingForm = () => {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  const [value, setValue] = useState("")

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <>
      <Text m='2' fontWeight='semibold'>
        Rate Us
      </Text>
      <Box display='flex'>
        {[...Array(5)].map((_, i) => {
          const ratingValue = i + 1
          const rated = ratingValue <= (hover || rating)
          return (
            <StarIcon
              w={8}
              h={8}
              key={i}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(ratingValue)}
              color={rated ? "green" : "gray.300"}
              cursor='pointer'
              m='2'
            />
          )
        })}
      </Box>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Share details of your own experience at this place'
        size='sm'
        m='2'
      />
      <Button colorScheme='green' variant='solid' m='2'>
        Submit
      </Button>
    </>
  )
}
