import { Box, BoxProps } from "@chakra-ui/react"
import { HEADER_HEIGHT } from "@/utils/constants"

const MainContainer = ({ children, ...props }: BoxProps) => {
  return (
    <Box as="main" pt={`${HEADER_HEIGHT}px`} {...props}>
      {children}
    </Box>
  )
}

export default MainContainer
