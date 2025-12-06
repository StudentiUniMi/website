import React from "react"
import { Box, Heading, useColorModeValue } from "@chakra-ui/react"

interface ItemListTitleProps {
  label: string
  sectionId?: string
}

/**
 * @name ItemListTitle
 *
 * @description
 * Renders the title for an item list, optionally as a linkable anchor.
 *
 * @param props - {@link ItemListTitleProps}
 * @returns {JSX.Element} The rendered item list title.
 *
 * @author Giuseppe Del Campo
 */
const ItemListTitle: React.FC<ItemListTitleProps> = ({ label, sectionId }) => {
  const color = useColorModeValue("blue.500", "blue.400")
  return (
    <Box
      as={sectionId ? "a" : undefined}
      href={sectionId ? `#${sectionId}` : undefined}
      position="relative"
      display="flex"
      alignItems="center"
      w="full"
      onClick={(e: any) => {
        if (sectionId) {
          const url = `${window.location.origin}${window.location.pathname}#${sectionId}`
          navigator.clipboard.writeText(url)
        }
      }}
      cursor={sectionId ? "pointer" : "default"}
      role={sectionId ? "button" : undefined}
      tabIndex={sectionId ? 0 : undefined}
      _hover={sectionId ? { ".anchor-hash": { opacity: 1 } } : undefined}
      style={{ textDecoration: "none" }}
    >
      {sectionId && (
        <Box
          className="anchor-hash"
          position="absolute"
          left={-6}
          opacity={0}
          transition="opacity 0.2s"
          color={color}
          fontWeight="bold"
          fontSize="2xl"
          userSelect="none"
          pointerEvents="none"
          display={{ base: "none", lg: "block" }}
        >
          #
        </Box>
      )}
      <Heading w="full" size="xl" mb={3} textAlign={{ base: "center", lg: "left" }} mt={2} id={sectionId} transition="color 0.2s">
        {label}
      </Heading>
    </Box>
  )
}

export default ItemListTitle
