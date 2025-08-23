import { Box, Flex, Text, Link, Stack, Divider, IconButton, useColorModeValue, Tooltip } from "@chakra-ui/react"
import { Facebook, Instagram, Github, Mail, Send, MessageCircle } from "lucide-react"
import { useTranslation } from "next-i18next"

const Footer = () => {
  const { t } = useTranslation("common")

  const bg = useColorModeValue("white", "gray.900")
  const border = useColorModeValue("gray.200", "gray.700")
  const text = useColorModeValue("gray.600", "gray.300")
  const textMuted = useColorModeValue("gray.500", "gray.400")
  const hoverBg = useColorModeValue("gray.100", "gray.800")

  // 🔹 Configurazione centralizzata Socials
  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/networkstudentiunimi",
      icon: Facebook,
      hoverColor: useColorModeValue("blue.600", "blue.400"),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/networkstudentiunimi/",
      icon: Instagram,
      hoverColor: useColorModeValue("pink.500", "pink.400"),
    },
    {
      label: "Telegram",
      href: "https://t.me/studenti_unimi",
      icon: Send,
      hoverColor: useColorModeValue("blue.500", "blue.400"),
    },
    {
      label: "Discord",
      href: "https://discord.gg/SwPzAkv4A4",
      icon: MessageCircle,
      hoverColor: useColorModeValue("indigo.500", "indigo.400"),
    },
    {
      label: "GitHub",
      href: "https://github.com/StudentiUnimi",
      icon: Github,
      hoverColor: useColorModeValue("gray.900", "gray.100"),
    },
    {
      label: "Email",
      href: "mailto:info@studentiunimi.it",
      icon: Mail,
      hoverColor: useColorModeValue("red.500", "red.400"),
    },
  ]

  return (
    <Box bg={bg} borderTop="1px solid" borderColor={border}>
      <Flex maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={10} direction={{ base: "column", md: "row" }} justify="space-between" gap={8}>
        {/* Colonna 1 - Logo & descrizione */}
        <Box flex="1">
          <Text fontWeight="bold" fontSize="lg" mb={2} color={useColorModeValue("gray.900", "white")}>
            StudentiUniMi
          </Text>
          <Text fontSize="sm" color={text}>
            {t("footer.description")}
          </Text>
        </Box>

        {/* Colonna 2 - Link rapidi */}
        <Stack spacing={2} flex="1">
          <Text fontWeight="semibold" fontSize="md" mb={2} color={useColorModeValue("gray.900", "white")}>
            {t("footer.resources")}
          </Text>
          <Link href="/services" fontSize="sm" color={text} _hover={{ color: "blue.500" }}>
            {t("footer.services")}
          </Link>
          <Link href="/rules" fontSize="sm" color={text} _hover={{ color: "blue.500" }}>
            {t("footer.rules")}
          </Link>
          <Link href="/about" fontSize="sm" color={text} _hover={{ color: "blue.500" }}>
            {t("footer.about")}
          </Link>
        </Stack>

        {/* Colonna 3 - Social */}
        <Stack spacing={2} flex="1">
          <Text fontWeight="semibold" fontSize="md" mb={2} color={useColorModeValue("gray.900", "white")}>
            {t("footer.contacts")}
          </Text>
          <Flex gap={3}>
            {socials.map(({ label, href, icon: Icon, hoverColor }) => (
              <Tooltip key={label} label={label} hasArrow>
                <IconButton
                  as={Link}
                  isExternal
                  href={href}
                  aria-label={label}
                  icon={<Icon size={18} />}
                  variant="ghost"
                  size="sm"
                  color={text}
                  _hover={{ bg: hoverBg, color: hoverColor }}
                />
              </Tooltip>
            ))}
          </Flex>
        </Stack>
      </Flex>

      {/* Divider & Bottom bar */}
      <Divider borderColor={border} />
      <Flex maxW="1200px" mx="auto" px={{ base: 4, md: 8 }} py={4} justify="space-between" direction={{ base: "column", md: "row" }} gap={2}>
        <Text fontSize="xs" color={textMuted}>
          © {new Date().getFullYear()} StudentiUniMi. {t("footer.rights")}{" "}
          <Link fontSize="xs" target="_blank" color="blue.500" href="https://cdn.studentiunimi.it/privacy-policy-IT.pdf">
            {t("footer.privacy")}
          </Link>
        </Text>
        <Text fontSize="xs" color={textMuted}>
          {t("footer.madeWith")}{" "}
          <Link href="https://github.com/Giuseppetm" target="_blank" color="blue.500">
            Giuseppe Del Campo
          </Link>
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
