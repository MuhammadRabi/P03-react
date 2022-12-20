import { FaEdit, FaPrescriptionBottleAlt } from "react-icons/fa"

const ListItem = ({ id, title, removeItem, editItem }) => {
  return (
    <>
      <li className="flex justify-between capitalize items-center mb-2 w-3/4 px-2 py-1 mx-auto hover:bg-slate-200">
        {title}

        <div className="flex justify-between space-x-1">
          <button
            className="text-emerald-500 cursor-pointer opacity-70 hover:opacity-100"
            onClick={() => editItem(id)}
          >
            <FaEdit />
          </button>
          <button
            className="text-red-500 cursor-pointer opacity-70 hover:opacity-100"
            onClick={() => removeItem(id)}
          >
            <FaPrescriptionBottleAlt />
          </button>
        </div>
      </li>
    </>
  )
}

export default ListItem
