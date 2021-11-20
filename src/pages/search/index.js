import { Container, Input } from "@chakra-ui/react"
import { SearchCard } from "../../components/Search"

export default function Search() {
  return (
    <div>
      <Container
        height='1000px'
        maxW='container.sm'
        textAlign='center'
        p={0}
        mx="auto"
        style={{
          backgroundColor: "#F7F7F7",
        
        }}
      >
        <Container textAlign='center'>
          <form>
            <Input placeholder='Search' bg='white' />
          </form>

          <SearchCard />
          <SearchCard/>
          <SearchCard/>

        </Container>
      </Container>
    </div>
  )
}
