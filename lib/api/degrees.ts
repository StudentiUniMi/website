import { apiEndpoint, getAsync, Result } from "./client"
import { Degree, VerboseDegree } from "@/types/api"

export async function getDegrees(departmentKey: string): Promise<Result<Degree[]>> {
  return getAsync(`${apiEndpoint}/degrees?dep_id=${departmentKey}`)
}

export async function getVerboseDegreeBySlug(degreeSlug: string): Promise<Result<VerboseDegree>> {
  return getAsync(`${apiEndpoint}/degree?slug=${degreeSlug}`)
}

export async function getVerboseDegreeByID(degreeID: string): Promise<Result<VerboseDegree>> {
  return getAsync(`${apiEndpoint}/degree?pk=${degreeID}`)
}

export async function getStringDegrees(): Promise<Result<string[]>> {
  return getAsync(`${apiEndpoint}/typing-degrees`)
}

export async function getDegreesForSearchBox(searchText: string): Promise<Result<Degree[]>> {
  return getAsync(`${apiEndpoint}/search-degrees?q=${searchText}`)
}
