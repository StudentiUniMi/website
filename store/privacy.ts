import { create } from "zustand"
import Cookies from "js-cookie"

export type Consent = "accepted" | "declined" | undefined

interface PrivacyState {
  initialized: boolean
  showPopup: boolean
  consent?: "accepted" | "declined"
  shake: boolean
  init: () => void
  open: () => void
  accept: () => void
  decline: () => void
  triggerShake: () => void
}

export const COOKIE_KEY = "privacyConsent"

export const usePrivacyStore = create<PrivacyState>((set) => ({
  initialized: false,
  showPopup: false,
  consent: undefined,
  shake: false,

  init: () => {
    const saved = Cookies.get("privacyConsent") as "accepted" | "declined" | undefined
    set({
      initialized: true,
      consent: saved,
      showPopup: saved === undefined, // mostra subito se mai scelto
    })
  },

  open: () => set({ showPopup: true }),

  accept: () => {
    Cookies.set("privacyConsent", "accepted", { expires: 365 })
    set({ consent: "accepted", showPopup: false })
  },

  decline: () => {
    Cookies.set("privacyConsent", "declined", { expires: 365 })
    set({ consent: "declined", showPopup: false })
  },

  triggerShake: () => {
    set({ shake: true })
    setTimeout(() => set({ shake: false }), 600) // reset dopo animazione
  },
}))
