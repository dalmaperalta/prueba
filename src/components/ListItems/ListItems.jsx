import Form from "../Form/Form"
import {Link} from "react-router-dom"
const ListItems = ({items, setItems, deleteItem}) => {
  return (
    <div>
      <Form setItems = {setItems}/>
      {items.map ((item) => (
        <div key={item.id}>
        <Link to={`${item.id}`}>
           <h2>{item.title}</h2>
           <button onClick={() => deleteItem (item.id)}>Delete</button>
        </Link>
        </div>
        ))}
  </div>
  )
  }

export default ListItems