import { useEffect } from "react"
import { useToast, Box, Text, HStack, Fade, useColorModeValue } from "@chakra-ui/react"
import { Info } from "lucide-react"
import { useRouter } from "next/router"
import { useTranslations } from "next-intl"

const SearchHintToast = () => {
  const toast = useToast()
  const router = useRouter()
  const t = useTranslations("common")

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
      setTimeout(scrollAndFocus, 400)
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
        render: () => {
          const bg = useColorModeValue("blue.500", "blue.400")
          const hoverBg = useColorModeValue("blue.600", "blue.500")
          const textColor = useColorModeValue("white", "gray.900")

          return (
            <Fade in>
              <Box
                bg={bg}
                color={textColor}
                px={4}
                py={3}
                rounded="lg"
                shadow="lg"
                maxW="sm"
                cursor="pointer"
                _hover={{ bg: hoverBg }}
                onClick={handleClick}
              >
                <HStack align="center" spacing={3}>
                  <Info size={18} />
                  <Box>
                    <Text fontWeight="semibold" fontSize="sm">
                      {t("searchHint.title")}
                    </Text>
                    <Text fontSize="xs">{t("searchHint.subtitle")}</Text>
                  </Box>
                </HStack>
              </Box>
            </Fade>
          )
        },
      })

      sessionStorage.setItem("seenSearchHint", "true")
    }
  }, [toast, router, t])

  return null
}

export default SearchHintToast
