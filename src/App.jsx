import './App.css'
import db from '../db/firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import ListItems from './components/ListItems/ListItems'
import { Routes, Route} from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
  const [items, setItems] = useState([])
  const itemsCollectionRef = collection (db, 'items')
  //carrito
  //const [cart, setCart] = useState([])
  //const cartCollectionRef = collection (db, 'cart')
  const [loading, setLoading] = useState(true)


  const getItems = async () => {
    const itemsCollection = await getDocs(itemsCollectionRef)
    setItems(
       itemsCollection.docs.map((doc)=>({...doc.data(), id: doc.id}))  
    )
    setLoading(false)
  }

  //agregar item (documentos)
  const addItem = async () => {
    const docRef = await addDoc(itemsCollectionRef, {
      title: 'item 1',
      price: 100, 
    })
  }

  //eliminar item (documentos)
  const deleteItem = async (id) => {
    const docRef = doc(db, 'items', id)
    await deleteDoc(docRef)
    getItems()
  }

    useEffect(() => {
      getItems()
    }, [])
 
    if (loading) {
      return <h1>Loading...</h1>
    }

  return (
    <div>
      <Routes>
        <Route path="/" element= {<h1>my app</h1>} />
        <Route path="/items" element= {<ListItems items={items} setItems ={setItems}  deleteItem = {deleteItem}/>} />
        <Route path="/items/:id" element= {<ItemDetail />} />
        <Route path="*" element= {<h1>404 not found</h1>} />
      </Routes>

    
      <button onClick={addItem}>Agregar item</button>

    </div>
  )
}

export default App
