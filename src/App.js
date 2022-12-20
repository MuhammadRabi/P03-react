import Alert from "./Alert"
import List from "./List"
import "./App.css"
import { useEffect, useState } from "react"
import Layout from "./Layout"
import DarkMode from "./DarkMode"
import { addListToLocalStorage, getListFromLocalStorage } from "./localStorage"
/* 
const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")))
  } else {
    return []
  }
} */

function App() {
  const [name, setName] = useState("")
  /*   const [list, setList] = useState(getLocalStorage())
   */ const [list, setList] = useState(getListFromLocalStorage())
  const [editing, setEditing] = useState(false)
  const [editingID, setEditingID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, "please enter an item first", "red")
    } else if (name && editing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editingID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName("")
      setEditingID(null)
      setEditing(false)
      showAlert(true, "item is successfuly edited", "green")
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName("")
      showAlert(true, "item is successfuly added", "green")
    }
  }

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({
      show,
      msg,
      type,
    })
  }

  const clearItems = () => {
    setList([])
    showAlert(true, "all items cleared", "red")
  }

  const removeItem = (id) => {
    const newItems = list.filter((entry) => {
      return entry.id !== id
    })
    setList(newItems)
    showAlert(true, "item has been deleted!", "red")
  }

  const editItem = (id) => {
    const specificEntry = list.find((item) => item.id === id)
    setEditing(true)
    setEditingID(id)
    setName(specificEntry.title)
  }
  /* 
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list]) */
  useEffect(() => {
    addListToLocalStorage(list)
  }, [list])

  return (
    <Layout>
      <section className="py-6 w-5/6 sm:w-4/6 mx-auto mt-12 text-center drop-shadow-xl bg-gray-200 dark:bg-slate-100 rounded-md md:w-2/6">
        <DarkMode />
        <h3 className="font-bold my-2">Todo List</h3>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <form onSubmit={handleSubmit}>
          <div className="w-11/12 mx-auto flex justify-center">
            <input
              type="text"
              placeholder="e.g: go to gym"
              className="flex-auto py-1 px-4 outline-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="basis-1/4 capitalize bg-cyan-500 text-white py-1 px-2 hover:text-slate-100"
            >
              {editing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="list-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button
              className="text-red-600 capitalize opacity-70 hover:opacity-100"
              onClick={clearItems}
            >
              clear items
            </button>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default App
