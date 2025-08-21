import { LocalizedField } from "./Models"

export default interface Developer {
  name: string
  description: LocalizedField
  username: string
  user_id: number
  github: string
}
