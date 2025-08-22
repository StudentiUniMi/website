import { Box, BoxProps, Button, ButtonProps } from "@chakra-ui/react"
import { usePrivacyStore } from "@/store/privacy"
import { useEffect } from "react"
import Link from "next/link"

interface PrivacyButtonProps extends BoxProps {
  href: string
}

const PrivacyButton = ({ href, children, ...rest }: PrivacyButtonProps) => {
  const { consent, open, init, initialized } = usePrivacyStore()
  const hasConsent = consent === "accepted"

  useEffect(() => {
    if (!initialized) init()
  }, [initialized, init])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!hasConsent) {
      e.preventDefault()
      open()
    }
  }

  return (
    <Box as={hasConsent ? Link : Box} href={hasConsent ? href : undefined} onClick={handleClick} {...rest}>
      {children}
    </Box>
  )
}

export default PrivacyButton
