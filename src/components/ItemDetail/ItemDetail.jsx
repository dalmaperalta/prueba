import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../../db/firebase-config'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetail = () => {
 const { id } = useParams()
 const [item, setItem] = useState({})

 const getItem = async (id) => {
    const docRef = doc(db, 'items', id)

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setItem(docSnap.data())
    } else {
        alert('no existe')
    }
 }

    useEffect(() => {
        getItem(id)
    }, [id])

  return (
    <div>
        <h1>{item.title}</h1>
        <h2>{item.price}</h2>
    </div>
  )
}

export default ItemDetail