import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [ product, setProduct] = useState({})
    const [ loading, setLoading ] = useState(true)

    const { productId } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)
        getDoc(queryDoc)
        .then(resp => setProduct({ id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [])

    return (

        <>
            { <ItemDetail product={product}/> }
        </>
        
    )
}

export default ItemDetailContainer