import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'


const ItemListContainer = () => { 
    const [ products, setProducts ] = useState([])
    const [ product, setProduct ] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    
    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryFilter = id ? query(queryCollection, where('category', '==', id)) : queryCollection

            getDocs(queryFilter)
            .then(data => setProducts(data.docs.map(product => ({ id: product.id, ...product.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        

    }, [id])
    
    return (
        <div>
        
            { 

                <div className='item-list-container'>
                    <ItemList products={products}/>
                </div>
                    
            }            
        
        </div>
    )
}

export default ItemListContainer
