import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Stack,
  Box,
} from "@chakra-ui/react"
import NextLink from "next/link"
import Image from "next/image"
import SearchBar from "@/components/search-bar"
import { useRouter } from "next/router"
import { ArrowLeft } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ label: string; href: string }>
}

const Sidebar = ({ isOpen, onClose, navItems }: SidebarProps) => {
  const router = useRouter()

  const bg = useColorModeValue("white", "gray.900")
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900")
  const hoverBg = useColorModeValue("gray.100", "gray.700")
  const textMuted = useColorModeValue("gray.500", "gray.400")
  const activeBg = useColorModeValue("blue.50", "blue.900")
  const activeText = useColorModeValue("blue.600", "blue.300")
  const arrowBorder = useColorModeValue("blue.500", "blue.300")
  const arrowColor = useColorModeValue("black", "white")

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{ base: "full", sm: "md" }}>
      <DrawerOverlay />
      <DrawerContent bg={bg} px={{ base: 6, md: 8 }} py={6}>
        <DrawerCloseButton mt={5} />

        {/* Header con logo */}
        <HStack spacing={3} justify="space-between">
          <Image src="/images/horizontal_logo.png" alt="Logo" width={100} height={40} />
        </HStack>

        {/* Barra di ricerca */}
        <SearchBar enableLabel={false} pb={2} />

        <Text fontSize="md" fontWeight="medium" color={textColor}>
          Menu
        </Text>

        {/* Navigazione */}
        <DrawerBody px={0} as={Stack}>
          <VStack spacing={2} align="stretch" flexGrow={1}>
            {navItems.map((item) => {
              const isActive = router.pathname === item.href

              return (
                <NextLink key={item.href} href={item.href}>
                  <HStack
                    as="button"
                    justify="space-between"
                    align="center"
                    px={4}
                    py={3}
                    spacing={4}
                    borderRadius="md"
                    transition="all 0.2s"
                    onClick={onClose}
                    _hover={{ bg: hoverBg }}
                    bg={isActive ? activeBg : "transparent"}
                    w="full"
                  >
                    <Text fontSize="2xl" fontWeight={isActive ? "semibold" : "medium"} color={isActive ? activeText : textColor}>
                      {item.label}
                    </Text>

                    {isActive && (
                      <Box
                        as="span"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        w="32px"
                        h="32px"
                        border="2px solid"
                        borderColor={arrowBorder}
                        rounded="full"
                      >
                        <ArrowLeft size={18} strokeWidth={2.5} color={arrowColor} />
                      </Box>
                    )}
                  </HStack>
                </NextLink>
              )
            })}
          </VStack>

          <Box borderTop="1px solid" borderColor={useColorModeValue("gray.200", "gray.700")} pt={3} />

          {/* Contatti */}
          <Text fontSize="xs" color={textMuted}>
            Hai bisogno di aiuto?{" "}
            <Link href="mailto:info@studentiunimi.it" target="_blank" color={useColorModeValue("blue.600", "blue.300")} fontWeight="medium">
              Contattaci via email{" "}
            </Link>
            oppure sul{" "}
            <Link href="https://t.me/unimichat" target="_blank" color={useColorModeValue("blue.600", "blue.300")} fontWeight="medium">
              gruppo principale
            </Link>
          </Text>

          <Flex py={4} justify="space-between" direction="column" gap={1}>
            <Text fontSize="xs" color={textMuted}>
              © {new Date().getFullYear()} StudentiUniMi. Tutti i diritti riservati.{" "}
              <Link
                fontSize="xs"
                target="_blank"
                color={useColorModeValue("blue.600", "blue.300")}
                href="https://cdn.studentiunimi.it/privacy-policy-IT.pdf"
              >
                Privacy Policy
              </Link>
            </Text>
            <Text fontSize="xs" color={textMuted}>
              Website made with ❤️ by{" "}
              <Link href="https://github.com/Giuseppetm" target="_blank" color={useColorModeValue("blue.600", "blue.300")}>
                Giuseppe Del Campo
              </Link>
            </Text>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
