import { useContext } from "react"
import { AppContext } from "./context"

const Layout = ({ children }) => {
  const { darkMode } = useContext(AppContext)

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="bg-white h-screen px-5 md:px-10 lg:px-20 mx-auto flex justify-center items-start dark:bg-gray-800">
        {children}
      </div>
    </main>
  )
}

export default Layout
