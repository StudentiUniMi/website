"use client"
import { useState, useEffect, useRef } from "react"
import { InputGroup, InputLeftElement, Input, VStack, Text, useColorModeValue, InputRightElement, Button, Fade, StackProps } from "@chakra-ui/react"
import { Search } from "lucide-react"
import { useRouter } from "next/router"
import { useTranslations } from "next-intl"

interface SearchBarProps extends StackProps {
  enableLabel?: boolean
  sidebarMode?: boolean
  onSearch?: () => void
  focusOnOpen?: boolean
}

const SearchBar = ({ enableLabel = true, sidebarMode = false, onSearch, focusOnOpen = false, ...props }: SearchBarProps) => {
  const router = useRouter()
  const t = useTranslations("common")
  const inputRef = useRef<HTMLInputElement>(null)

  const [query, setQuery] = useState("")
  const [highlight, setHighlight] = useState(false)

  const bg = useColorModeValue("gray.100", "gray.700")
  const focusBg = useColorModeValue("white", "gray.800")
  const placeholderColor = useColorModeValue("gray.500", "gray.400")
  const iconColor = useColorModeValue("gray.600", "gray.200")
  const tipColor = useColorModeValue("blue.600", "blue.300")
  const labelColor = useColorModeValue("gray.500", "gray.400")

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${query}`)
      onSearch?.()
    }
  }

  const handleHighlight = () => {
    setHighlight(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 500)
  }

  useEffect(() => {
    if (inputRef.current && focusOnOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [focusOnOpen])

  useEffect(() => {
    window.addEventListener("highlight-searchbar", handleHighlight)
    return () => window.removeEventListener("highlight-searchbar", handleHighlight)
  }, [])

  return (
    <VStack spacing={3} w="100%" maxW="700px" mx="auto" py={8} {...props} id="search-bar">
      {enableLabel && (
        <Text fontSize="lg" fontWeight="semibold" color={labelColor} textAlign="center">
          {t("searchBar.label")}
        </Text>
      )}

      {/* Barra di ricerca */}
      <InputGroup size="lg" w="100%">
        <InputLeftElement pointerEvents="none" h="100%">
          <Search size={20} strokeWidth={2.5} lightingColor={iconColor} />
        </InputLeftElement>

        <Input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={!sidebarMode ? t("searchBar.placeholder.main") : t("searchBar.placeholder.sidebar")}
          fontSize={!sidebarMode ? "lg" : "sm"}
          bg={bg}
          _focus={{ bg: focusBg }}
          _placeholder={{ color: placeholderColor }}
          rounded="xl"
          px={6}
          borderWidth={highlight ? "2px" : "1px"}
          borderColor={highlight ? "blue.400" : "transparent"}
          boxShadow={highlight ? "0 0 0 3px rgba(66, 153, 225, 0.6)" : "none"}
          transition="all 0.3s ease"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch()
          }}
        />

        {/* Bottone ricerca */}
        <InputRightElement w="5.5rem" h="100%">
          <Button colorScheme="blue" size={!sidebarMode ? "sm" : "xs"} fontSize={!sidebarMode ? "sm" : "xs"} rounded="md" onClick={handleSearch}>
            {t("searchBar.button")}
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* Tip */}
      <Fade in={query.length > 0}>
        <Text fontSize={!sidebarMode ? "sm" : { base: "xs", md: "sm" }} color={tipColor}>
          {t("searchBar.tip")}
        </Text>
      </Fade>
    </VStack>
  )
}

export default SearchBar
