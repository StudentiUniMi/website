import { create } from "zustand"

interface State {}

export const useUIStore = create<State>((set) => ({}))
