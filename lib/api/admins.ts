import { apiEndpoint, getAsync, Result } from "./client"
import { Admin } from "@/types/api"

export async function getDegreeAdmins(degreeSlug: string): Promise<Result<Admin[]>> {
  return getAsync(`${apiEndpoint}/admins?slug=${degreeSlug}`)
}
