import { Stack, Heading, Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ItemListProps<T> {
  label?: string
  items: Array<T>
  renderItem: (item: T) => ReactNode
}

const ItemList = <T,>({ label, items, renderItem }: ItemListProps<T>) => {
  return (
    <Stack direction={{ base: "column", lg: "row" }} mb={24} spacing={12}>
      {label && (
        <Heading size="xl" mb={3} textAlign={{ base: "center", lg: "left" }} minWidth={{ lg: 250 }} position="sticky">
          {label}
        </Heading>
      )}

      <Stack direction={{ base: "column", sm: "row" }} flexWrap="wrap" justifyContent={{ base: "center", lg: "flex-start" }}>
        {items.map((item, idx) => (
          <Box key={idx}>{renderItem(item)}</Box>
        ))}
      </Stack>
    </Stack>
  )
}

export default ItemList
