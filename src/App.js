import Alert from "./Alert"
import List from "./List"
import "./App.css"
import { useState } from "react"
import Layout from "./Layout"

function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState([])
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
      showAlert(true, "please write an item first", "red")
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName("")
      showAlert(true, "item is successfuly added", "green")
    }
  }

  const showAlert = (show = "false", msg = "", type = "") => {
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

  return (
    <Layout>
      <h1>Todo List</h1>
      <section className="py-6 w-3/4 mx-auto mt-12 text-center drop-shadow-xl bg-slate-100 rounded-md md:w-1/3">
        <h3 className="font-bold my-2">Todo List</h3>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="e.g: go to gym"
              className="py-1 px-4 outline-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="capitalize bg-cyan-500 text-white py-1 px-4 hover:text-slate-100"
            >
              {editing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="list-container">
            <List items={list} />
            <button className="text-red-700 capitalize" onClick={clearItems}>
              clear items
            </button>
          </div>
        )}
      </section>
    </Layout>
  )
}

export default App
