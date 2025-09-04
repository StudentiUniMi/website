import { Stack, Heading, Box, Input, InputGroup, InputLeftElement, InputRightElement, IconButton, StackDirection, StackProps } from "@chakra-ui/react"
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react"
import debounce from "lodash.debounce"
import EmptyState from "../empty-state"
import { ListFilter, X } from "lucide-react"

/**
 * Props for the {@link ItemList} component.
 * @template T - Type of the items in the list.
 */
interface ItemListProps<T> extends StackProps {
  /** Optional section label displayed above the list. */
  label?: string
  /** Enable a search input to filter items by name. */
  enableSearch?: boolean
  /** Array of items to render. */
  items: Array<T>
  /** Optional first element to always display at the top (e.g., main degree group). */
  firstElement?: ReactNode
  /** Name used to filter the `firstElement` when search is active. */
  firstElementName?: string
  /** Custom width for the label/search stack. */
  customLabelWidth?: { minWidth?: any; maxWidth?: any }
  /** Optional HTML id for the section. */
  sectionId?: string
  /** Direction for items layout. Defaults to column on mobile, row on desktop. */
  itemsDirection?: StackDirection
  /** Function to render each item. */
  renderItem: (item: T) => ReactNode
  /** Function to extract the searchable name from each item. */
  getItemName: (item: T) => string
}

/**
 * @name ItemList
 *
 * @description
 * Generic list component with optional search/filter functionality.
 *
 * Features:
 * - Supports a label and search input to filter items by name.
 * - Can display a special `firstElement` that is always at the top.
 * - Responsive layout with customizable item direction.
 * - Debounced search to improve performance.
 * - Displays `EmptyState` when no items match the filter.
 *
 * @template T - Type of the items in the list.
 * @param props - {@link ItemListProps<T>}
 * @returns The rendered item list with optional search/filter.
 *
 * @example
 * ```tsx
 * <ItemList
 *   label="Available Courses"
 *   enableSearch
 *   items={courses}
 *   getItemName={(c) => c.name}
 *   renderItem={(c) => <CourseCard data={c} />}
 * />
 * ```
 *
 * @author Giuseppe Del Campo
 */
const ItemList = <T,>({
  label,
  items,
  enableSearch,
  firstElement,
  firstElementName,
  customLabelWidth = { minWidth: 250, maxWidth: 250 },
  itemsDirection,
  sectionId,
  getItemName,
  renderItem,
  ...props
}: ItemListProps<T>) => {
  const [inputValue, setInputValue] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const debouncedApply = useMemo(
    () =>
      debounce((val: string) => {
        setSearchTerm(val.trim().toLowerCase())
      }, 500),
    []
  )

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value
      setInputValue(val)
      debouncedApply(val)
    },
    [debouncedApply]
  )

  const filteredItems = useMemo(() => {
    const normalizedTerm = searchTerm.trim().toLowerCase()
    const result: ReactNode[] = []

    if (firstElement && typeof firstElementName === "string" && firstElementName.trim().toLowerCase().includes(normalizedTerm)) {
      result.push(<Box key="first">{firstElement}</Box>)
    }

    const filtered = items
      .filter((item) => {
        const rawName = getItemName?.(item)
        const name = typeof rawName === "string" ? rawName.trim().toLowerCase() : ""
        return name.includes(normalizedTerm)
      })
      .map((item, idx) => <Box key={idx}>{renderItem(item)}</Box>)

    return [...result, ...filtered]
  }, [items, searchTerm, getItemName, renderItem, firstElement, firstElementName])

  useEffect(() => {
    return () => {
      debouncedApply.cancel()
    }
  }, [debouncedApply])

  return (
    <Stack direction={{ base: "column", lg: "row" }} mb={24} spacing={12} align={{ lg: "flex-start" }} id={sectionId} {...props}>
      {(label || enableSearch) && (
        <Stack
          position={{ base: "static", lg: "sticky" }}
          top="80px"
          minWidth={{ lg: customLabelWidth.minWidth }}
          maxWidth={{ lg: customLabelWidth.maxWidth }}
        >
          {label && (
            <Heading size="xl" mb={3} textAlign={{ base: "center", lg: "left" }} mt={2}>
              {label}
            </Heading>
          )}

          {enableSearch && (
            <InputGroup maxW="350px" mx={{ base: "auto", lg: "0" }} rounded="xl">
              {/* 🔽 Icona filtro a sinistra */}
              <InputLeftElement pointerEvents="none" pb={2}>
                <ListFilter size={12} />
              </InputLeftElement>

              <Input rounded="xl" placeholder="Filtra per nome..." value={inputValue} onChange={handleSearchChange} size="sm" pl={8} />

              {inputValue && (
                <InputRightElement>
                  <IconButton
                    aria-label="Clear search"
                    size="xs"
                    variant="ghost"
                    icon={<X size={14} />}
                    onClick={() => {
                      setInputValue("")
                      setSearchTerm("")
                    }}
                    pb={2}
                  />
                </InputRightElement>
              )}
            </InputGroup>
          )}
        </Stack>
      )}

      {filteredItems.length > 0 ? (
        <Stack direction={itemsDirection ?? { base: "column", md: "row" }} flexWrap="wrap" justifyContent={{ base: "center", lg: "flex-start" }}>
          {filteredItems}
        </Stack>
      ) : (
        <EmptyState />
      )}
    </Stack>
  )
}

export default ItemList
