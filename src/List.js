import ListItem from "./ListItem"

const List = ({ items, removeItem, editItem }) => {
  return (
    <ul className="mt-5">
      {items.map((item) => {
        return (
          <ListItem
            key={item.id}
            {...item}
            removeItem={removeItem}
            editItem={editItem}
          />
        )
      })}
    </ul>
  )
}

export default List
