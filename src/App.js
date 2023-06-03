import Alert from "./Alert";
import List from "./List";
import "./App.css";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import { addListToLocalStorage, getListFromLocalStorage } from "./localStorage";
import DarkModeBtn from "./DarkModeBtn";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getListFromLocalStorage());
  const [editing, setEditing] = useState(false);
  const [editingID, setEditingID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter an item first", "red");
    } else if (name && editing) {
      // deal with edit
      setList(
        list.map((item) => {
          if (item.id === editingID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditingID(null);
      setEditing(false);
      showAlert(true, "item is successfuly edited", "green");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      showAlert(true, "item is successfuly added", "green");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({
      show,
      msg,
      type,
    });
  };

  const clearItems = () => {
    setList([]);
    showAlert(true, "all items cleared", "red");
  };

  const removeItem = (id) => {
    const newItems = list.filter((entry) => {
      return entry.id !== id;
    });
    setList(newItems);
    showAlert(true, "item has been deleted!", "red");
  };

  const editItem = (id) => {
    const specificEntry = list.find((item) => item.id === id);
    setEditing(true);
    setEditingID(id);
    setName(specificEntry.title);
  };

  useEffect(() => {
    addListToLocalStorage(list);
  }, [list]);

  return (
    <Layout>
      <section className="w-full max-w-sm py-6 mx-auto mt-12 text-center bg-gray-200 rounded-md drop-shadow-xl dark:bg-slate-200 md:max-w-lg">
        <DarkModeBtn />
        <h3 className="my-2 font-bold">Todo List</h3>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center w-11/12 mx-auto">
            <input
              type="text"
              placeholder="e.g: go to gym"
              className="w-2/3 px-4 py-3 rounded-l-md outline-0 "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              type="submit"
              className="px-2 py-1 text-white capitalize rounded-r-md basis-1/4 bg-cyan-500 hover:text-slate-100"
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
  );
}

export default App;
