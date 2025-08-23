import { useRouter } from "next/router"
import { Button, HStack, Tooltip } from "@chakra-ui/react"

interface LanguageSwitcherProps {
  isInSidebar?: boolean
}

const LanguageSwitcher = ({ isInSidebar = false }: LanguageSwitcherProps) => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router

  const changeLanguage = (lng: string) => {
    router.push({ pathname, query }, asPath, { locale: lng })
  }

  return (
    <HStack spacing={1} display={isInSidebar ? "flex" : { base: "none", md: "flex" }}>
      <Tooltip label="Cambia lingua in Italiano" placement="bottom">
        <Button
          letterSpacing="1px"
          size="sm"
          variant={locale === "it" ? "solid" : "outline"}
          colorScheme="blue"
          borderRadius="full"
          onClick={() => changeLanguage("it")}
        >
          IT
        </Button>
      </Tooltip>

      <Tooltip label="Switch language to English" placement="bottom">
        <Button size="sm" variant={locale === "en" ? "solid" : "outline"} colorScheme="blue" borderRadius="full" onClick={() => changeLanguage("en")}>
          EN
        </Button>
      </Tooltip>
    </HStack>
  )
}

export default LanguageSwitcher
