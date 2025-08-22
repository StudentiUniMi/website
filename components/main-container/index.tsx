import { Box, BoxProps } from "@chakra-ui/react"
import { HEADER_HEIGHT } from "@/utils/constants"

const MainContainer = ({ children, ...props }: BoxProps) => {
  return (
    <Box flexGrow={1} pt={`${HEADER_HEIGHT}px`} {...props}>
      {children}
    </Box>
  )
}

export default MainContainer
