import { BoxProps, Container } from "@chakra-ui/react"
import { HEADER_HEIGHT } from "@/utils/constants"

const MainContainer = ({ children, ...props }: BoxProps) => {
  return (
    <Container pt={`${HEADER_HEIGHT}px`} {...props}>
      {children}
    </Container>
  )
}

export default MainContainer
