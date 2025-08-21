import { useRouter } from "next/router"
import { Button, HStack } from "@chakra-ui/react"

const LanguageSwitcher = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router

  const changeLanguage = (lng: string) => {
    router.push({ pathname, query }, asPath, { locale: lng })
  }

  return (
    <HStack spacing={1}>
      <Button size="sm" variant={locale === "it" ? "solid" : "outline"} colorScheme="blue" borderRadius="full" onClick={() => changeLanguage("it")}>
        IT
      </Button>
      <Button size="sm" variant={locale === "en" ? "solid" : "outline"} colorScheme="blue" borderRadius="full" onClick={() => changeLanguage("en")}>
        EN
      </Button>
    </HStack>
  )
}

export default LanguageSwitcher
