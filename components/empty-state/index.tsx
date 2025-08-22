import { Box, Text, VStack, useColorModeValue } from "@chakra-ui/react"
import { Inbox } from "lucide-react"

interface EmptyStateProps {
  label?: string
}

const EmptyState: React.FC<EmptyStateProps> = ({ label = "No items match the search criteria entered." }) => {
  const textColor = useColorModeValue("gray.600", "gray.400")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const bg = useColorModeValue("gray.50", "gray.800")

  return (
    <Box
      border="1px dashed"
      borderColor={borderColor}
      rounded="xl"
      bg={bg}
      p={10}
      w="full"
      minH="160px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={3}>
        <Inbox size={36} strokeWidth={1.5} colorRendering={textColor} />
        <Text fontSize="md" fontWeight="medium" color={textColor} textAlign="center">
          {label}
        </Text>
      </VStack>
    </Box>
  )
}

export default EmptyState
