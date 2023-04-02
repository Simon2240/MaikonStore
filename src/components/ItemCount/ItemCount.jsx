import React, { useState } from 'react'

const ItemCount = ({ stock=10, initial=1, onAdd}) => {
  const [ count, setCount ] = useState(initial)

  const handleCountRemove = () => {
    if (count > initial) {
        setCount(count-1)
    }
  }
  const handleCountAdd = () => {
    if (count < stock) {
      setCount(count+1)
    }
  }

  const handleOnAdd = () => {
    onAdd(count)
  }

  return (
    <div className='card-buy'>
      <div className="card-options">
        <button onClick={handleCountAdd} className='card-button-plus'>+</button>
        <label className='card-number' htmlFor="">{count}</label>
        <button onClick={handleCountRemove} className='card-button-minus'>-</button>
      </div>
      <div className="card-footer">
        <button className='card-add-cart' onClick={ ()=> onAdd(count) } >Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount