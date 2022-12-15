import { useEffect } from "react"

const Alert = ({ show, msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list, removeAlert])

  return (
    <>
      <div className="text-sm capitalize rounded-sm w-2/3 mx-auto my-1">
        <p
          className={
            type === "green" ? "bg-green-200 py-0.5" : "bg-red-200 py-0.5"
          }
        >
          {msg}
        </p>
      </div>
    </>
  )
}

export default Alert
