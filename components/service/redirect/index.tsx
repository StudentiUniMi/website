"use client"

import { Box, Flex, Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Service } from "@/types"
import { useCustomRouter } from "@/hooks/router"

interface RedirectCardProps {
  item: Service
}

export default function RedirectCard({ item }: RedirectCardProps) {
  const { locale } = useCustomRouter()

  const bg = useColorModeValue("gray.50", "gray.700") // <-- default bg
  const hoverBg = useColorModeValue("gray.200", "gray.600") // <-- hover bg
  const borderColor = useColorModeValue("gray.200", "gray.600")
  const overlayBg = useColorModeValue("whiteAlpha.900", "blackAlpha.700")
  const overlayText = useColorModeValue("gray.800", "gray.100")

  return (
    <Link href={item.link} target="_blank" rel="noopener noreferrer" prefetch={false}>
      <Box
        role="group"
        w={{ base: "100%", md: "170px" }}
        h={{ base: "90px", md: "170px" }}
        borderWidth="1px"
        borderRadius="2xl"
        borderColor={borderColor}
        bg={bg}
        transition="all 0.2s ease"
        _hover={{ bg: hoverBg, transform: "translateY(-4px)", shadow: "lg" }}
        cursor="pointer"
        position="relative"
        overflow="hidden"
        display="flex"
        flexDirection={{ base: "row", md: "column" }}
        justifyContent={{ base: "space-between", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
        px={{ base: 4, md: 4 }}
        py={{ base: 0, md: 4 }}
      >
        {/* Mobile: titolo + freccia orizzontale */}
        <Flex w="full" justify="space-between" align="center" display={{ base: "flex", md: "none" }}>
          <Heading size="sm" noOfLines={1}>
            {item.name[locale]}
          </Heading>
          <ArrowRight size={18} />
        </Flex>

        {/* Desktop: titolo (max 3 righe, sparisce in hover) */}
        <Flex
          direction="column"
          w="full"
          display={{ base: "none", md: "flex" }}
          zIndex={1}
          opacity={1}
          transition="opacity 0.2s ease"
          _groupHover={{ opacity: 0 }}
        >
          <Heading size="sm" noOfLines={3} textAlign="left" lineHeight="short" wordBreak="break-word">
            {item.name[locale]}
          </Heading>
        </Flex>

        {/* Overlay descrizione on hover */}
        <Flex
          position="absolute"
          inset={0}
          bg={overlayBg}
          p={4}
          justify="center"
          align="center"
          textAlign="center"
          opacity={0}
          transition="opacity 0.2s ease"
          _groupHover={{ opacity: 1 }}
          zIndex={2}
        >
          <Text fontSize="xs" noOfLines={6} color={overlayText}>
            {item.description?.[locale]}
          </Text>
        </Flex>

        {/* Icona in alto a destra (solo desktop, in hover) */}
        <Icon
          as={ArrowUpRight}
          boxSize={5}
          color="blue.500"
          position="absolute"
          top={3}
          right={3}
          opacity={0}
          transform="translate(4px, -4px)"
          transition="all 0.2s ease"
          _groupHover={{ opacity: 1, transform: "translate(0, 0)" }}
          display={{ base: "none", md: "block" }}
          zIndex={3}
        />
      </Box>
    </Link>
  )
}
