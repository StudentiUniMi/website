import React from "react"
import { Box, Stack, VStack, Text, Button, Link, useColorModeValue, Icon, BoxProps } from "@chakra-ui/react"
import { PlusCircle } from "lucide-react"
import { useTranslations } from "next-intl"

const GroupNotFound: React.FC<BoxProps> = ({ ...props }) => {
  const t = useTranslations("search")

  const bg = useColorModeValue("white", "gray.900")
  const cardBg = useColorModeValue("gray.50", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900")
  const muted = useColorModeValue("gray.500", "gray.400")
  const accent = useColorModeValue("blue.600", "blue.300")

  return (
    <Box
      w="full"
      maxW={{ base: "100%", md: "900px", lg: "1100px" }}
      bg={bg}
      borderRadius="lg"
      boxShadow="sm"
      border="1px solid"
      borderColor={borderColor}
      p={{ base: 4, md: 6 }}
      mx="auto"
      {...props}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 4, md: 6 }}
        align={{ base: "flex-start", md: "stretch" }}
        justify="space-between"
        w="full"
      >
        <VStack align="start" spacing={2} flex="1" w="full" textAlign={"left"}>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" color={textColor}>
            {t("groupNotFound.heading")}
          </Text>

          <Text fontSize={{ base: "sm", md: "sm" }} color={muted} maxW={{ base: "100%", md: "70%" }}>
            {t("groupNotFound.description")}
          </Text>
        </VStack>

        <VStack align={{ base: "start", md: "end" }} spacing={3} w={{ base: "full", md: "auto" }}>
          <Link href="mailto:info@studentiunimi.it?subject=Richiesta%20creazione%20gruppo" isExternal w={{ base: "full", md: "auto" }}>
            <Button
              leftIcon={<Icon as={PlusCircle} />}
              size={{ base: "md", md: "md" }}
              aria-label={t("groupNotFound.cta")}
              variant="solid"
              w={{ base: "full", md: "auto" }}
            >
              {t("groupNotFound.cta")}
            </Button>
          </Link>

          <Text fontSize="xs" color={muted} textAlign={{ base: "left", md: "right" }} w={{ base: "full", md: "auto" }}>
            {t("groupNotFound.altText")}{" "}
            <Link href="https://t.me/+YYp-w5K8w3VjZWRk" isExternal color={accent} fontWeight="medium">
              {t("groupNotFound.clickHere")}.
            </Link>
          </Text>
        </VStack>
      </Stack>

      {/* Footer call-to-action */}
      <Box mt={4} bg={cardBg} borderRadius="md" p={3} border="1px solid" borderColor={borderColor}>
        <Text fontSize="sm" color={textColor}>
          {t("groupNotFound.footer")}{" "}
          <Link href="https://studentiunimi.it" isExternal color={accent} fontWeight="medium">
            studentiunimi.it
          </Link>
          .
        </Text>
      </Box>
    </Box>
  )
}

export default GroupNotFound
