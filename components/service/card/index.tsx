import { Box, Heading, Text, useColorModeValue, Icon, Flex, Image } from "@chakra-ui/react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Service } from "@/types"
import { useCustomRouter } from "@/hooks/router"
import Link from "next/link"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { locale } = useCustomRouter()

  const bg = useColorModeValue("gray.50", "gray.700")
  const hoverBg = useColorModeValue("gray.200", "gray.600")
  const borderColor = useColorModeValue("gray.200", "gray.600")
  const overlayBg = useColorModeValue("whiteAlpha.900", "blackAlpha.700")
  const overlayText = useColorModeValue("gray.800", "gray.100")

  return (
    <Link href={service.link} target="_blank" rel="noopener noreferrer" prefetch={false}>
      <Box
        role="group"
        w={{ base: "100%", sm: "full", md: "250px" }}
        h={{ base: "100px", md: "270px" }}
        borderWidth="1px"
        borderRadius="2xl"
        borderColor={borderColor}
        bg={bg}
        transition="all 0.2s ease"
        _hover={{
          bg: hoverBg,
          transform: "translateY(-4px)",
          shadow: "lg",
        }}
        cursor="pointer"
        position="relative"
        overflow="hidden"
        display="flex"
        flexDirection={{ base: "row", md: "column" }}
        justifyContent={{ base: "space-between", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        {/* 🔹 Mobile layout (titolo + freccia) */}
        <Flex w="full" justify="space-between" align="center" px={3} display={{ base: "flex", md: "none" }} gap={3}>
          <Box flexShrink={0}>
            <Image src={"/images/services/" + service.image} alt={service.name[locale]} boxSize="60px" objectFit="cover" borderRadius="md" />
          </Box>
          <Flex flex="1" justify="space-between" align="center">
            <Heading size="sm" noOfLines={2}>
              {service.name[locale]}
            </Heading>
            <ArrowRight size={18} />
          </Flex>
        </Flex>

        {/* 🔹 Desktop layout con titolo + immagine */}
        <Flex
          direction="column"
          w="full"
          h="full"
          display={{ base: "none", md: "flex" }}
          position="relative"
          zIndex={1}
          opacity={1}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 0 }}
        >
          {/* Titolo in alto */}
          <Box p={4}>
            <Heading size="md" noOfLines={2} textAlign="left">
              {service.name[locale]}
            </Heading>
          </Box>

          {/* Immagine full-bleed */}
          <Box flex="1" w="full" overflow="hidden">
            <Image src={"/images/services/" + service.image} alt={service.name[locale]} objectFit="cover" w="100%" h="100%" />
          </Box>
        </Flex>

        {/* 🔹 Overlay descrizione (hover) */}
        <Flex
          direction="column"
          justify="center"
          align="center"
          textAlign="center"
          position="absolute"
          inset={0}
          bg={overlayBg}
          p={6}
          opacity={0}
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
          zIndex={2}
          display={{ base: "none", md: "flex" }}
        >
          <Text fontSize="sm" noOfLines={5} color={overlayText}>
            {service.description?.[locale]}
          </Text>
        </Flex>

        {/* 🔹 Icona in alto a destra (hover) */}
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
          _groupHover={{
            opacity: 1,
            transform: "translate(0, 0)",
          }}
          display={{ base: "none", md: "block" }}
          zIndex={3}
        />
      </Box>
    </Link>
  )
}
