import { apiEndpoint, getAsync, Result } from "./client"
import { Department } from "@/types"

export async function getDepartments(): Promise<Result<Department[]>> {
  return getAsync(`${apiEndpoint}/departments`)
}
