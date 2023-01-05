import { createContext, useState, useEffect } from "react"
import {
  addDarkModeToLocalStorage,
  getDarkModeFromLocalStorage,
} from "./localStorage"

const AppContext = createContext()

getDarkModeFromLocalStorage()
const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getDarkModeFromLocalStorage())

  useEffect(() => {
    addDarkModeToLocalStorage(darkMode)
  }, [darkMode])

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
