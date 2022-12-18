import { createContext, useState, useEffect } from "react"

const AppContext = createContext()
const getdarkStorage = () => {
  let dark = localStorage.getItem("darkMode")
  if (dark) {
    return (dark = JSON.parse(localStorage.getItem("darkMode")))
  } else {
    return false
  }
}

const AppProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getdarkStorage)

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
