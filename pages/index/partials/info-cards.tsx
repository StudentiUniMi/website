import { Box, Flex, Heading, Text, Tag, IconButton, useColorModeValue, Image, SimpleGrid, Stack, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { ArrowUpRight } from "lucide-react"
import { useTranslation } from "next-i18next"

const ResourceCards = () => {
  const { t } = useTranslation("common")
  const cardBg = useColorModeValue("gray.50", "gray.700")
  const tagBg = useColorModeValue("white", "gray.700")
  const tagBorder = useColorModeValue("gray.300", "gray.600")

  return (
    <Stack direction={{ base: "column", lg: "row" }} mb={24}>
      <Heading size="xl" mb={3} textAlign={{ base: "center", lg: "left" }} maxWidth={{ lg: 280 }} mt={2}>
        {t("resourcesTitle")}
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%" maxW="6xl" mx="auto">
        {/* Gruppo principale */}
        <LinkBox
          as={Flex}
          bg={cardBg}
          rounded="xl"
          p={5}
          align="flex-start"
          justify="space-between"
          gap={6}
          role="group"
          cursor="pointer"
          transition="all 0.2s ease"
          _hover={{ shadow: "md" }}
          tabIndex={-1}
        >
          <Box flex="1" tabIndex={-1}>
            <Heading fontSize="xl" mb={2}>
              <LinkOverlay href="https://t.me/unimichat">{t("mainGroupTitle")}</LinkOverlay>
            </Heading>
            <Tag size="md" borderRadius="full" px={3} py={1} bg={tagBg} border="1px solid" borderColor={tagBorder} mb={3}>
              {t("mainGroupStudents", { count: 4000 })}
            </Tag>
            <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
              {t("mainGroupDescription")}
            </Text>
          </Box>

          <Box position="relative">
            <Image src="/images/group.jpeg" alt="Gruppo Studenti" boxSize="130px" objectFit="cover" rounded="md" />
            <IconButton
              aria-label={t("openLink")}
              icon={<ArrowUpRight size={18} />}
              size="sm"
              rounded="full"
              position="absolute"
              top={-3}
              right={-3}
              bg={tagBg}
              shadow="md"
              pointerEvents="none"
              transition="all 0.3s ease"
              _groupHover={{ top: -8, right: -8 }}
              tabIndex={-1}
            />
          </Box>
        </LinkBox>

        {/* Canale Telegram */}
        <LinkBox
          as={Flex}
          bg={cardBg}
          rounded="xl"
          p={5}
          align="flex-start"
          justify="space-between"
          gap={6}
          role="group"
          cursor="pointer"
          transition="all 0.3s ease"
          _hover={{ shadow: "md" }}
          tabIndex={-1}
        >
          <Box flex="1" tabIndex={-1}>
            <Heading fontSize="xl" mb={2}>
              <LinkOverlay href="https://t.me/studenti_unimi">{t("telegramChannelTitle")}</LinkOverlay>
            </Heading>
            <Tag size="md" borderRadius="full" px={3} py={1} bg={tagBg} border="1px solid" borderColor={tagBorder} mb={3}>
              {t("telegramChannelSubscribers", { count: 3500 })}
            </Tag>
            <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
              {t("telegramChannelDescription")}
            </Text>
          </Box>

          <Box position="relative">
            <Image src="/images/channel.jpeg" alt="Canale Telegram" boxSize="130px" objectFit="cover" rounded="md" />
            <IconButton
              aria-label={t("openLink")}
              icon={<ArrowUpRight size={18} />}
              size="sm"
              rounded="full"
              position="absolute"
              top={-3}
              right={-3}
              bg={tagBg}
              shadow="md"
              pointerEvents="none"
              transition="all 0.2s ease"
              _groupHover={{ top: -8, right: -8 }}
              tabIndex={-1}
            />
          </Box>
        </LinkBox>
      </SimpleGrid>
    </Stack>
  )
}

export default ResourceCards
