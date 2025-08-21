import { apiEndpoint, getAsync, Result } from "./client"
import { Representative } from "@/types"

export async function getRepresentatives(departmentKey: string): Promise<Result<Representative[]>> {
  return getAsync(`${apiEndpoint}/representatives?dep_id=${departmentKey}`)
}
