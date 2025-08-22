import { useDisclosure } from "@chakra-ui/react"
import { Box, Flex, HStack, IconButton, useColorMode, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import LanguageSwitcher from "../language-switcher"
import Sidebar from "./partials/sidebar"
import { useRouter } from "next/router"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const MotionBox = motion(Box)

interface HeaderProps {
  enableHideOnScrollUp?: boolean
}

const Header = ({ enableHideOnScrollUp }: HeaderProps) => {
  const { t } = useTranslation("common")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const { pathname } = useRouter()

  const [hovered, setHovered] = useState<string | null>(null)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const activeBg = useColorModeValue("blue.500", "blue.300")
  const activeColor = useColorModeValue("white", "gray.900")
  const bg = useColorModeValue("rgba(255, 255, 255, 0.7)", "rgba(26, 32, 44, 0.7)")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.rules"), href: "/rules" },
    { label: t("nav.about"), href: "/about" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scroll down → nascondi
        setShow(false)
      } else {
        // scroll up → mostra
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    if (enableHideOnScrollUp) window.addEventListener("scroll", handleScroll)
    return () => {
      if (enableHideOnScrollUp) window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {show && (
        <MotionBox
          as="header"
          position={"fixed"}
          top={0}
          left={0}
          right={0}
          zIndex={1000}
          px={{ base: 1, md: 4 }}
          bg={bg}
          backdropFilter="blur(12px)"
          borderBottom="1px solid"
          borderColor={borderColor}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Flex h={14} alignItems="center" justifyContent="space-between">
            {/* Logo / Brand */}
            <Link href={"/"}>
              <Image src={"/images/horizontal_logo.png"} width={100} height={30} alt="Network Studenti UniMi" />
            </Link>

            {/* Desktop - Navigation */}
            <HStack spacing={6} as="nav" display={{ base: "none", md: "flex" }}>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                const isHovered = hovered === item.href

                return (
                  <ChakraLink
                    as={Link}
                    px={3}
                    py={1.5}
                    rounded="md"
                    fontWeight={isActive ? "semibold" : "medium"}
                    bg={isActive ? activeBg : "transparent"}
                    color={isActive ? activeColor : "inherit"}
                    opacity={hovered && !isHovered ? 0.5 : 1} // <- qui l’effetto fade
                    transition="all 0.2s ease"
                    _hover={{
                      textDecoration: "none",
                      bg: isActive ? activeBg : useColorModeValue("gray.100", "gray.700"),
                    }}
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHovered(item.href)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {item.label}
                  </ChakraLink>
                )
              })}
            </HStack>

            {/* Actions */}
            <HStack spacing={{ base: 1, md: 6 }}>
              {/* Dark mode toggle */}
              <IconButton
                aria-label="Toggle dark mode"
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="ghost"
                borderRadius="3xl"
              />

              {/* Language switcher */}
              <LanguageSwitcher />

              {/* Hamburger mobile */}
              <IconButton
                aria-label="Open menu"
                icon={<HamburgerIcon boxSize={5} />}
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="solid"
                size="md"
                bg={useColorModeValue("blue.500", "blue.400")}
                color="white"
                _hover={{ bg: useColorModeValue("blue.600", "blue.300") }}
                shadow="sm"
              />
            </HStack>
          </Flex>

          {/* Sidebar mobile */}
          <Sidebar isOpen={isOpen} onClose={onClose} navItems={navItems} />
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default Header
