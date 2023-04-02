import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    const [ isCount, setIsCount ] = useState(false)

    const { agregarCarrito } = useCartContext()

    const onAdd = (count) => {
        agregarCarrito( { ... product, count } )
        setIsCount(true)
    }

  return (
    <div className="item-detail-container">
        <img className='item-detail-img' src={product.urlImage} alt={product.name} />
        <div className="detail-container">
            <div className="item-container">
                <div className="item-elements">
                    <h3 className='item-name'>{product.name}</h3>
                    <h4 className='item-price'>$ {product.price}</h4>
                </div>
            </div>
            <div className="cart-container">
                {isCount ? 

                    <div className='cart-options'>
                        <Link to="/">
                            <button className='cart-option-next'>Seguir comprando</button>
                        </Link>
                        <Link to="/cart">
                            <button className='cart-option-back'>Ir al carrito</button>
                        </Link>
                    </div>

                :
                   <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                }
            </div>
        </div>
    </div>
  )
}

export default ItemDetail