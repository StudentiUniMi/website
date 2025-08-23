type Namespace = "common" | "seo" | "about" | "services" | "rules" | "search" | "degree" | "notFound"

export async function loadMessages(locale: string | undefined, namespaces: Array<Namespace>) {
  const safeLocale = locale || "it"

  if (!locale) {
    console.warn("[intl] Locale non definito, uso fallback:", safeLocale)
  }

  try {
    const messages = await Promise.all(
      namespaces.map(async (ns) => {
        try {
          const mod = await import(`../messages/${safeLocale}/${ns}.json`)
          return [ns, mod.default]
        } catch (err) {
          console.error(`[intl] Errore nel caricamento di ${safeLocale}/${ns}.json`, err)
          return [ns, {}]
        }
      })
    )

    return Object.fromEntries(messages)
  } catch (err) {
    console.error("[intl] Errore generale nel caricamento dei messaggi", err)
    return {}
  }
}
