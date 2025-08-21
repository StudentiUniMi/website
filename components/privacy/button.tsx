import { Button, ButtonProps } from "@chakra-ui/react"
import { usePrivacyStore } from "@/store/privacy"
import { useEffect } from "react"
import Link from "next/link"

interface PrivacyButtonProps extends ButtonProps {
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
    <Button as={hasConsent ? Link : Button} href={hasConsent ? href : undefined} onClick={handleClick} colorScheme="blue" rounded="lg" {...rest}>
      {children}
    </Button>
  )
}

export default PrivacyButton
