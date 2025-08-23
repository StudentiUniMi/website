import { Service, ServiceCategory } from "@/types"

export const getServiceById = (services: Array<Service>, id: string) => services.find((s) => s.id === id)
export const getServicesByCategory = (services: Array<Service>, category: ServiceCategory) => services.filter((s) => s.category === category)
