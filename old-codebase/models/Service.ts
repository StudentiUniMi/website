import { LocalizedField } from "./Models"

export default interface Service {
  id: string
  name: LocalizedField
  description: LocalizedField
  link: string
  icon: string
}
