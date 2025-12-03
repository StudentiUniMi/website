import { Flex, Avatar, Text, useColorModeValue } from "@chakra-ui/react"
import NextLink from "next/link"
import { motion } from "framer-motion"
import type { Admin } from "@/types/api"

const MotionFlex = motion(Flex)

export interface AdminCardProps {
  admin: Admin
}

/**
 * @name AdminCard
 *
 * @description
 * Displays an admin's information in a squared chip-style component.
 *
 * @param props - {@link AdminCardProps}
 * @returns The rendered admin chip.
 *
 * @author Giuseppe Del Campo
 */
const AdminCard = ({ admin }: AdminCardProps) => {
  const borderColor = useColorModeValue("gray.300", "gray.600")
  const bg = useColorModeValue("white", "gray.800")
  const hoverBg = useColorModeValue("gray.100", "gray.700")

  return (
    <NextLink href={`https://t.me/${admin.username}`} passHref legacyBehavior>
      <MotionFlex
        as="a"
        key={admin.id}
        align="center"
        gap={2}
        px={3}
        py={2}
        border="1px solid"
        borderColor={borderColor}
        rounded="xl"
        bg={bg}
        cursor="pointer"
        whileHover={{ y: -2, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        _hover={{
          bg: hoverBg,
          transition: "background-color 0.25s ease-in-out",
        }}
      >
        <Avatar name={`${admin.first_name} ${admin.last_name}`} size="xs" />
        <Flex direction="column" lineHeight="short">
          <Text fontSize="sm" fontWeight="medium" noOfLines={1}>
            {admin.first_name} {admin.last_name}
          </Text>
          <Text fontSize="xs" color="gray.500">
            @{admin.username}
          </Text>
        </Flex>
      </MotionFlex>
    </NextLink>
  )
}

export default AdminCard
