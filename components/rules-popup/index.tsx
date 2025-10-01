import { Box, Button, Text, HStack, useColorModeValue } from "@chakra-ui/react"
import { useState } from "react"
import { useTranslations } from "next-intl"

const RulesPopup = () => {
  const [isVisible, setIsVisible] = useState(true)
  const t = useTranslations("rules")

  const bg = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  if (!isVisible) return null

  return (
    <Box
      position="fixed"
      bottom={4}
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      bg={bg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="xl"
      boxShadow="lg"
      maxW="sm"
      w="90%"
      p={4}
      textAlign="center"
    >
      <Text fontWeight="semibold" mb={2}>
        {t("popup.title")}
      </Text>
      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }} mb={4}>
        {t("popup.description")}
      </Text>

      <HStack spacing={3} justify="center">
        <Button as="a" href="https://github.com/StudentiUniMi/docs/blob/main/regole.pdf" target="_blank" colorScheme="blue" size="sm">
          {t("popup.button")}
        </Button>
        <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
          {t("popup.close")}
        </Button>
      </HStack>
    </Box>
  )
}

export default RulesPopup
