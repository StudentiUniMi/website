import { Box, VStack, Text, HStack, Button, Link, useColorModeValue, Fade } from "@chakra-ui/react"
import { usePrivacyStore } from "@/store/privacy"
import { useEffect } from "react"

const PrivacyPopup: React.FC = () => {
  const { initialized, showPopup, init, accept, decline } = usePrivacyStore()

  const bg = useColorModeValue("white", "gray.800")
  const textColor = useColorModeValue("gray.700", "gray.200")
  const borderColor = useColorModeValue("gray.200", "gray.600")

  useEffect(() => {
    if (!initialized) init()
  }, [initialized, init])

  return (
    <Fade in={showPopup} unmountOnExit>
      <Box
        position="fixed"
        bottom={{ base: 4, md: 6 }}
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
      >
        <VStack align="start" spacing={4}>
          <Text fontWeight="bold" fontSize="lg">
            Rispettiamo la tua privacy
          </Text>
          <Text fontSize="sm" lineHeight="short">
            Per fare funzionare i nostri servizi memorizziamo alcuni dati nei nostri sistemi: informati riguardo la nostra privacy policy e
            regolamento.
          </Text>

          <VStack w="100%" spacing={3}>
            <HStack w="100%">
              <Button colorScheme="blue" flex={1} rounded="lg" onClick={accept}>
                Accetta tutto
              </Button>
              <Button variant="outline" flex={1} rounded="lg" onClick={decline}>
                Rifiuta
              </Button>
            </HStack>
            <HStack spacing={4}>
              <Link fontSize="xs" color="blue.500" href="https://cdn.studentiunimi.it/privacy-policy-IT.pdf">
                Privacy Policy
              </Link>
              <Link href="/rules" fontSize="xs" color="blue.500">
                Network rules
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Fade>
  )
}

export default PrivacyPopup
