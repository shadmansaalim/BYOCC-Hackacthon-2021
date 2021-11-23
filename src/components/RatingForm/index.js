import { useState } from "react"
import { Box, Button, Text, Textarea } from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import useAuth from "@hooks/useAuth"
import swal from "sweetalert"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
toast.configure()

export const RatingForm = () => {
  const {user} = useAuth();
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const router = useRouter();
  const id = router.query.id ;

  const [value, setValue] = useState("")

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  const handleReviewSubmit = e => {
    
    const review = {
      name: user.displayName,
      img: user.photoURL,
      rating: rating,
      text: value
    }
    e.preventDefault();
    fetch(`http://localhost:3000/api/organisationdetails/${id}`, {
      method: 'PUT',
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success(
          "Review Added Successfully"
        )
        setValue("")
        setRating(null)
        setHover(null)
      }

    })
  }

  return (
    <>
      <Text m='2' fontWeight='semibold'>
        Rate us on the basis of sustainability
      </Text>
      <form onSubmit={handleReviewSubmit}>
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
              color={rated ? "gold" : "gray.300"}
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
      <Button type="submit" colorScheme='green' variant='solid' m='2'>
        Submit
      </Button>
      </form>
    </>
  )
}
