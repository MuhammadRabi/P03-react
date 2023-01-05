import { useContext } from "react"
import { AppContext } from "./context"

const Layout = ({ children }) => {
  const { darkMode } = useContext(AppContext)

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="bg-white h-screen px-5 mx-auto flex justify-center items-start md:px-10 lg:px-20 dark:bg-gray-800">
        {children}
      </div>
    </main>
  )
}

export default Layout
