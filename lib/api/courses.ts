import { apiEndpoint, getAsync, Result } from "./client"
import { CourseDegree } from "@/types/api"

export async function getCourses(degreeKey: string): Promise<Result<CourseDegree[]>> {
  return getAsync(`${apiEndpoint}/courses?deg_id=${degreeKey}`)
}
