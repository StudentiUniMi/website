import { apiEndpoint, getAsync, Result } from "./client"
import { Department } from "@/types/api"

export async function getDepartments(): Promise<Result<Department[]>> {
  return getAsync(`${apiEndpoint}/departments`)
}
