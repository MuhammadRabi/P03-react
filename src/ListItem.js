import { FaEdit, FaPrescriptionBottleAlt } from "react-icons/fa";

const ListItem = ({ id, title, removeItem, editItem }) => {
  return (
    <>
      <li className="flex items-center justify-between w-3/4 px-2 py-3 pl-6 mx-auto mb-4 capitalize duration-300 bg-white rounded-md hover:bg-gray-300 dark:hover:bg-slate-300">
        {title}

        <div className="flex justify-between space-x-2">
          <button
            className="text-xl duration-300 cursor-pointer text-emerald-500 opacity-80 hover:opacity-100 hover:scale-105"
            onClick={() => editItem(id)}
          >
            <FaEdit />
          </button>
          <button
            className="text-xl text-red-500 duration-500 cursor-pointer opacity-80 hover:opacity-100 hover:rotate-12"
            onClick={() => removeItem(id)}
          >
            <FaPrescriptionBottleAlt />
          </button>
        </div>
      </li>
    </>
  );
};

export default ListItem;
