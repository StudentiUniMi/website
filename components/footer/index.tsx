import { Box, Flex, Text, Link, Stack, Divider, IconButton, useColorModeValue, Tooltip } from "@chakra-ui/react"
import { Facebook, Instagram, Github, Mail, Send, MessageCircle } from "lucide-react"

const Footer = () => {
  const bg = useColorModeValue("white", "gray.900")
  const border = useColorModeValue("gray.200", "gray.700")
  const text = useColorModeValue("gray.600", "gray.300")
  const textMuted = useColorModeValue("gray.500", "gray.400")
  const hoverBg = useColorModeValue("gray.100", "gray.800")

  return (
    <Box bg={bg} borderTop="1px solid" borderColor={border}>
      <Flex maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={10} direction={{ base: "column", md: "row" }} justify="space-between" gap={8}>
        {/* Colonna 1 - Logo & breve descrizione */}
        <Box flex="1">
          <Text fontWeight="bold" fontSize="lg" mb={2} color={useColorModeValue("gray.900", "white")}>
            StudentiUniMi
          </Text>
          <Text fontSize="sm" color={text}>
            Il network pensato per il presente e il futuro degli studenti dell’Università degli Studi di Milano.
          </Text>
        </Box>

        {/* Colonna 2 - Link rapidi */}
        <Stack spacing={2} flex="1">
          <Text fontWeight="semibold" fontSize="md" mb={2} color={useColorModeValue("gray.900", "white")}>
            Risorse
          </Text>
          <Link href="/services" fontSize="sm" color={text} _hover={{ color: "blue.500" }}>
            Servizi
          </Link>
          <Link href="/rules" fontSize="sm" color={text} _hover={{ color: "blue.500" }}>
            Regolamento
          </Link>
          <Link href="/about" fontSize="sm" color={text} _hover={{ color: "blue.500" }}>
            Chi siamo
          </Link>
        </Stack>

        {/* Colonna 3 - Social */}
        <Stack spacing={2} flex="1">
          <Text fontWeight="semibold" fontSize="md" mb={2} color={useColorModeValue("gray.900", "white")}>
            Seguici
          </Text>
          <Flex gap={3}>
            <Tooltip label="Facebook" hasArrow>
              <IconButton
                as={Link}
                href="https://www.facebook.com/networkstudentiunimi"
                aria-label="Facebook"
                icon={<Facebook size={18} />}
                variant="ghost"
                size="sm"
                color={text}
                _hover={{ bg: hoverBg, color: useColorModeValue("blue.600", "blue.400") }}
              />
            </Tooltip>
            <Tooltip label="Instagram" hasArrow>
              <IconButton
                as={Link}
                href="https://www.instagram.com/networkstudentiunimi/"
                aria-label="Instagram"
                icon={<Instagram size={18} />}
                variant="ghost"
                size="sm"
                color={text}
                _hover={{ bg: hoverBg, color: useColorModeValue("pink.500", "pink.400") }}
              />
            </Tooltip>
            <Tooltip label="Telegram" hasArrow>
              <IconButton
                as={Link}
                href="https://t.me/studenti_unimi"
                aria-label="Telegram"
                icon={<Send size={18} />}
                variant="ghost"
                size="sm"
                color={text}
                _hover={{ bg: hoverBg, color: useColorModeValue("blue.500", "blue.400") }}
              />
            </Tooltip>
            <Tooltip label="Discord" hasArrow>
              <IconButton
                as={Link}
                href="https://discord.gg/SwPzAkv4A4"
                aria-label="Discord"
                icon={<MessageCircle size={18} />}
                variant="ghost"
                size="sm"
                color={text}
                _hover={{ bg: hoverBg, color: useColorModeValue("indigo.500", "indigo.400") }}
              />
            </Tooltip>
            <Tooltip label="GitHub" hasArrow>
              <IconButton
                as={Link}
                href="https://github.com/StudentiUnimi"
                aria-label="GitHub"
                icon={<Github size={18} />}
                variant="ghost"
                size="sm"
                color={text}
                _hover={{ bg: hoverBg, color: useColorModeValue("gray.900", "gray.100") }}
              />
            </Tooltip>
            <Tooltip label="Email" hasArrow>
              <IconButton
                as="a"
                href="mailto:info@studentiunimi.it"
                aria-label="Email"
                icon={<Mail size={18} />}
                variant="ghost"
                size="sm"
                color={text}
                _hover={{ bg: hoverBg, color: useColorModeValue("red.500", "red.400") }}
              />
            </Tooltip>
          </Flex>
        </Stack>
      </Flex>

      {/* Divider & Bottom bar */}
      <Divider borderColor={border} />
      <Flex maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={4} justify="space-between" direction={{ base: "column", md: "row" }} gap={2}>
        <Text fontSize="xs" color={textMuted}>
          © {new Date().getFullYear()} StudentiUniMi. Tutti i diritti riservati.{" "}
          <Link fontSize="xs" target="_blank" color="blue.500" href="https://cdn.studentiunimi.it/privacy-policy-IT.pdf">
            Privacy Policy
          </Link>
        </Text>
        <Text fontSize="xs" color={textMuted}>
          Website made with ❤️ by{" "}
          <Link href="https://github.com/Giuseppetm" target="_blank" color="blue.500">
            Giuseppe Del Campo
          </Link>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
