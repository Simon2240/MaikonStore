import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <div className="item-img">
        <img className='card-image' src={product.urlImage} alt='Producto'/>
      </div>
      <div className="item-content">   
        <h2 className='item-name' >{`${product.name}`}</h2>
        <h2 className='item-price'>$ {product.price}</h2>   
        <div>
          <Link to={`/detail/${product.id}`}>
            <button className="item-detalle">
              Detalle del producto
            </button>
          </Link>
        </div>                                             
      </div>
    </div>                                                    
  )
}

export default Item