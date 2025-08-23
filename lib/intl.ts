type Namespace = "common" | "seo" | "about" | "services" | "rules" | "search" | "degree" | "notFound"

export async function loadMessages(locale: string, namespaces: Array<Namespace>) {
  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async (ns) => {
        const mod = await import(`../messages/${locale}/${ns}.json`)
        return [ns, mod.default]
      })
    )
  )
  return messages
}
