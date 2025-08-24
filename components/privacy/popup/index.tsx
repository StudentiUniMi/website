import { Box, VStack, Text, HStack, Button, Link, useColorModeValue, Fade, useToast } from "@chakra-ui/react"
import { usePrivacyStore } from "@/store/privacy"
import { useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const PrivacyPopup: React.FC = () => {
  const { initialized, showPopup, init, accept, decline, shake } = usePrivacyStore()
  const t = useTranslations("common")
  const toast = useToast()

  const isToastActive = toast.isActive("search-hint")

  const bg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.700", "gray.200")
  const borderColor = useColorModeValue("gray.200", "gray.600")

  useEffect(() => {
    if (!initialized) init()
  }, [initialized, init])

  return (
    <Fade in={showPopup} unmountOnExit>
      <MotionBox
        position="fixed"
        bottom={isToastActive ? { base: 20, md: 24 } : { base: 4, md: 6 }}
        right={{ base: 4, md: 6 }}
        bg={bg}
        color={textColor}
        p={6}
        rounded="2xl"
        shadow="xl"
        borderWidth="1px"
        borderColor={borderColor}
        maxW="sm"
        zIndex={1000}
        animate={
          shake
            ? {
                x: [0, -10, 10, -10, 10, 0],
                boxShadow: [
                  "0 0 0 0px rgba(252, 165, 165, 0.0)",
                  "0 0 0 0px rgba(252, 165, 165, 0.0)",
                  "0 0 0 8px rgba(235, 64, 64, 0.8)",
                  "0 0 0 0px rgba(252, 165, 165, 0.0)",
                ],
              }
            : { boxShadow: "0 0 0 0px rgba(0,0,0,0)" }
        }
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 1], // 0.2s ≈ 25% della durata (0.8s)
        }}
        boxShadow={shake ? "0 0 0 6px rgba(251, 146, 60, 0.7)" : "xl"}
      >
        <VStack align="start" spacing={4}>
          <Text fontWeight="bold" fontSize="lg">
            {t("privacy.title")}
          </Text>
          <Text fontSize="sm" lineHeight="short">
            {t("privacy.description")}
          </Text>

          <VStack w="100%" spacing={3}>
            <HStack w="100%">
              <Button colorScheme="blue" flex={1} rounded="lg" onClick={accept}>
                {t("privacy.acceptAll")}
              </Button>
              <Button variant="outline" flex={1} rounded="lg" onClick={decline}>
                {t("privacy.decline")}
              </Button>
            </HStack>
            <HStack spacing={4}>
              <Link fontSize="xs" color="blue.500" href="https://cdn.studentiunimi.it/privacy-policy-IT.pdf">
                {t("privacy.policyLink")}
              </Link>
              <Link href="/rules" fontSize="xs" color="blue.500">
                {t("privacy.rulesLink")}
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </MotionBox>
    </Fade>
  )
}

export default PrivacyPopup
