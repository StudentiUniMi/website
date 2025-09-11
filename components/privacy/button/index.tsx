import { Box, BoxProps } from "@chakra-ui/react"
import { usePrivacyStore } from "@/store/privacy"
import { useEffect } from "react"
import Link from "next/link"

interface PrivacyButtonProps extends BoxProps {
  href?: string
}

const PrivacyButton = ({ href, children, ...rest }: PrivacyButtonProps) => {
  const { consent, open, init, initialized, showPopup, triggerShake } = usePrivacyStore()
  const hasConsent = consent === "accepted"

  const isLinkEnabled = href && hasConsent

  useEffect(() => {
    if (!initialized) init()
  }, [initialized, init])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!hasConsent) {
      e.preventDefault()
      if (showPopup) {
        triggerShake()
      } else {
        open()
      }
    }
  }

  return (
    <Box as={isLinkEnabled ? Link : Box} href={isLinkEnabled ? href : undefined} onClick={handleClick} {...rest}>
      {children}
    </Box>
  )
}

export default PrivacyButton
