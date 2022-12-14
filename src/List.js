import ListItem from "./ListItem"

const List = ({ items }) => {
  return (
    <ul className="mt-5">
      {items.map((item) => {
        return <ListItem key={item.id} {...item} />
      })}
    </ul>
  )
}

export default List
