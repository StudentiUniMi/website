import { useEffect } from "react"
import { useToast, Box, Text, HStack, Fade } from "@chakra-ui/react"
import { Info } from "lucide-react"
import { useRouter } from "next/router"

const SearchHintToast = () => {
  const toast = useToast()
  const router = useRouter()

  const scrollAndFocus = () => {
    const searchInput = document.getElementById("search-bar")
    if (searchInput) {
      searchInput.scrollIntoView({ behavior: "smooth", block: "center" })
      window.dispatchEvent(new Event("highlight-searchbar"))
      const input = searchInput.querySelector("input") as HTMLInputElement
      if (input) input.focus()
    }
  }

  const handleClick = async () => {
    if (router.pathname !== "/") {
      await router.push("/")
      setTimeout(scrollAndFocus, 400) // tempo per render
    } else {
      scrollAndFocus()
    }
    toast.close("search-hint")
  }

  useEffect(() => {
    const hasSeenToast = sessionStorage.getItem("seenSearchHint")

    if (!hasSeenToast && !toast.isActive("search-hint")) {
      toast({
        id: "search-hint",
        duration: 10000,
        isClosable: true,
        position: "bottom",
        render: () => (
          <Fade in>
            <Box
              bg="blue.500"
              color="white"
              px={4}
              py={3}
              rounded="lg"
              shadow="lg"
              maxW="sm"
              cursor="pointer"
              _hover={{ bg: "blue.600" }}
              onClick={handleClick}
            >
              <HStack align="center" spacing={3}>
                <Info size={18} />
                <Box>
                  <Text fontWeight="semibold" fontSize="sm">
                    Stai cercando gruppi del tuo corso di laurea?
                  </Text>
                  <Text fontSize="xs">Clicca qui e utilizza la barra di ricerca!</Text>
                </Box>
              </HStack>
            </Box>
          </Fade>
        ),
      })

      sessionStorage.setItem("seenSearchHint", "true")
    }
  }, [toast, router])

  return null
}

export default SearchHintToast
