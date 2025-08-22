import { useRouter } from "next/router"

export const useCustomRouter = () => {
  const router = useRouter()

  const locale = router.locale as unknown as "it" | "en"

  return { ...router, locale }
}
