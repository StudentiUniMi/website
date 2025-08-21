import { useState } from "react"
import { InputGroup, InputLeftElement, Input, VStack, Text, useColorModeValue, InputRightElement, Button, Fade } from "@chakra-ui/react"
import { Search } from "lucide-react"
import { useRouter } from "next/router"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const bg = useColorModeValue("gray.100", "gray.700")
  const focusBg = useColorModeValue("white", "gray.800")
  const placeholderColor = useColorModeValue("gray.500", "gray.400")
  const iconColor = useColorModeValue("gray.600", "gray.200")
  const tipColor = useColorModeValue("blue.600", "blue.300")
  const labelColor = useColorModeValue("gray.500", "gray.400")

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${query}`)
    }
  }

  return (
    <VStack spacing={3} w="100%" maxW="700px" mx="auto" py={8}>
      <Text fontSize="lg" fontWeight="semibold" color={labelColor} textAlign="center">
        Cerca qualsiasi cosa: corsi di laurea, gruppi e molto altro
      </Text>

      {/* Barra di ricerca */}
      <InputGroup size="lg" w="100%">
        <InputLeftElement pointerEvents="none" h="100%">
          <Search size={20} strokeWidth={2.5} lightingColor={iconColor} />
        </InputLeftElement>

        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digita ciò che vorresti trovare..."
          bg={bg}
          _focus={{ bg: focusBg }}
          _placeholder={{ color: placeholderColor }}
          rounded="xl"
          px={6}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch()
          }}
        />

        {/* Bottone ricerca */}
        <InputRightElement w="5.5rem" h="100%">
          <Button colorScheme="blue" size="sm" rounded="md" onClick={handleSearch}>
            Cerca
          </Button>
        </InputRightElement>
      </InputGroup>

      {/* Tip */}
      <Fade in={query.length > 0}>
        <Text fontSize="sm" color={tipColor}>
          Una volta che hai finito di scrivere premi invio o premi il pulsante "Cerca"
        </Text>
      </Fade>
    </VStack>
  )
}

export default SearchBar
