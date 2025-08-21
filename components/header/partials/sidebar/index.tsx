import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from "@chakra-ui/react"
import NextLink from "next/link"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  navItems: { label: string; href: string }[]
}

const Sidebar = ({ isOpen, onClose, navItems }: SidebarProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <VStack spacing={4} align="start" mt={10}>
            {navItems.map((item) => (
              <NextLink key={item.href} href={item.href}>
                {item.label}
              </NextLink>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default Sidebar
