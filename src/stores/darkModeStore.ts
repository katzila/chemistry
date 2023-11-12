import { create } from "zustand";


interface DarkModeState {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const useDarkModeStore = create<DarkModeState>((set) => {
  const localStorageDarkMode = localStorage.getItem('darkMode') === 'true'

  return ({
    darkMode: localStorageDarkMode,
    setDarkMode: (darkMode) => {
      set((state) => ({
        darkMode
      }))
    },
  })
});

export default useDarkModeStore