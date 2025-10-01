import { SearchResult } from "@/types/api"
import { apiEndpoint, getAsync, Result } from "./client"

export async function getSearchResult(searchText: string): Promise<Result<SearchResult>> {
  return getAsync(`${apiEndpoint}/search?q=${searchText}`)
}
