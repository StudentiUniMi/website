import { apiEndpoint, getAsync, Result } from "./client"
import { ExtraGroups } from "@/types/api"

export async function getExtraGroups(): Promise<Result<ExtraGroups>> {
  return getAsync(`${apiEndpoint}/featured-groups`)
}
