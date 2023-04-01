import { addDoc, collection, getDocs } from "firebase/firestore"; 
import { useState } from "react";
import db from "../../../db/firebase-config";


const Form = () => {
 
 const [title, setTitle] = useState('')
 const [price, setPrice] = useState('')

const addItem = async (e) => {      
    e.preventDefault()
    const item = {
        title: title,
        price : price
    }
    const itemsCollectionRef = collection(db , 'items');
    await addDoc (itemsCollectionRef, item)
    const itemsCollection = await getDocs(itemsCollectionRef)
    setTitle('')
    setPrice('')
}

  return (
    <form onSubmit={addItem}>
        <input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={price} placeholder="price" onChange={(e)=> setPrice(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
  )
  
}

export default Form


