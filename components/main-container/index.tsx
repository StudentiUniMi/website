import { Box, BoxProps } from "@chakra-ui/react"
import { HEADER_HEIGHT } from "@/utils/constants"

const MainContainer = ({ children, ...props }: BoxProps) => {
  return (
    <Box as="main" pt={`${HEADER_HEIGHT}px`} px={{ base: 4, md: 8 }} {...props}>
      {children}
    </Box>
  )
}

export default MainContainer
