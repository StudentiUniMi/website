import { Grid, GridItem, Tooltip, useDisclosure } from "@chakra-ui/react"
import { Box, HStack, IconButton, useColorMode, useColorModeValue, Link as ChakraLink } from "@chakra-ui/react"
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"
import Link from "next/link"
import { useTranslations } from "next-intl"
// import LanguageSwitcher from "../language-switcher"
import Sidebar from "./partials/sidebar"
import { useRouter } from "next/router"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Search } from "lucide-react"

const MotionBox = motion(Box)

interface HeaderProps {
  enableHideOnScrollUp?: boolean
}

const Header = ({ enableHideOnScrollUp }: HeaderProps) => {
  const router = useRouter()
  const t = useTranslations("common")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  const { pathname } = useRouter()

  const [hovered, setHovered] = useState<string | null>(null)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const activeBg = useColorModeValue("blue.500", "blue.300")
  const activeColor = useColorModeValue("white", "gray.900")
  const bg = useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(26, 32, 44, 0.7)")
  const borderColor = useColorModeValue("gray.200", "gray.700")

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.rules"), href: "/rules" },
    { label: t("nav.about"), href: "/about" },
  ]

  const handleSearchClick = () => {
    if (pathname !== "/") {
      router.push("/").then(() => {
        setTimeout(() => {
          window.dispatchEvent(new Event("highlight-searchbar"))
        }, 300)
      })
    } else {
      window.dispatchEvent(new Event("highlight-searchbar"))
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false)
      } else {
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
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Grid templateColumns={{ base: "1fr auto", md: "1fr auto 1fr" }} alignItems="center" h={14}>
            {/* Logo a sinistra */}
            <GridItem pr={4} display="flex" alignItems="center">
              <ChakraLink as={Link} href="/" _hover={{ opacity: 0.9 }} display="inline-flex" alignItems="center" rounded="md" px={1}>
                <Image src="/images/horizontal_logo.png" width={100} height={30} alt="Network Studenti UniMi" />
              </ChakraLink>
            </GridItem>

            {/* Nav centrata (solo desktop) */}
            <GridItem display={{ base: "none", md: "flex" }} justifyContent="center">
              <HStack spacing={6} as="nav">
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
                      opacity={hovered && !isHovered ? 0.5 : 1}
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
            </GridItem>

            {/* Actions a destra */}
            <GridItem justifySelf="end">
              <HStack spacing={{ base: 1, md: 2, lg: 6 }}>
                <HStack spacing={{ base: 1, md: 1 }}>
                  {/* Search button */}
                  <Tooltip label="Cerca nel sito" placement="bottom">
                    <IconButton aria-label="Search" icon={<Search size={18} />} onClick={handleSearchClick} variant="ghost" borderRadius="3xl" />
                  </Tooltip>

                  {/* Dark mode toggle */}
                  <Tooltip label={colorMode === "light" ? "Attiva tema scuro" : "Attiva tema chiaro"} placement="bottom">
                    <IconButton
                      aria-label={colorMode === "light" ? "Attiva tema scuro" : "Attiva tema chiaro"}
                      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                      onClick={toggleColorMode}
                      variant="ghost"
                      borderRadius="3xl"
                    />
                  </Tooltip>
                </HStack>

                {/* TODO: Language switcher */}
                {/* <LanguageSwitcher /> */}

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
            </GridItem>
          </Grid>

          {/* Sidebar mobile */}
          <Sidebar isOpen={isOpen} onClose={onClose} navItems={navItems} />
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default Header
