import { createContext, useState, useEffect } from "react"
import {
  addDarkModeToLocalStorage,
  getDarkModeFromLocalStorage,
} from "./localStorage"

const AppContext = createContext()
/* const getdarkStorage = () => {
  let dark = localStorage.getItem("darkMode")
  if (dark) {
    return (dark = JSON.parse(localStorage.getItem("darkMode")))
  } else {
    return false
  }
} */

getDarkModeFromLocalStorage()
const AppProvider = ({ children }) => {
  /*   const [darkMode, setDarkMode] = useState(getdarkStorage)
   */ const [darkMode, setDarkMode] = useState(getDarkModeFromLocalStorage())

  useEffect(() => {
    /*     localStorage.setItem("darkMode", JSON.stringify(darkMode))
     */
    addDarkModeToLocalStorage(darkMode)
  }, [darkMode])

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
