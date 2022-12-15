import React, { useContext } from "react"
import { BsSun, BsMoon } from "react-icons/bs"
import { AppContext } from "./context"

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(AppContext)
  return (
    <div className="flex space-x-2 p-2 justify-center text-lg">
      {darkMode ? (
        <BsSun
          className="cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />
      ) : (
        <BsMoon
          className="cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />
      )}
    </div>
  )
}

export default DarkMode
