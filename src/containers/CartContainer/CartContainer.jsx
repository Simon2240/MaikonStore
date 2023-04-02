import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
  const [ dataForm, setFormData ] = useState({
    name: '',
    email: '',
    phone: '',
  })
  const {cartList, emptyCart, totalPrice, deleteItem} = useCartContext()

  const addOrder = (e) => { 
    e.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.price = totalPrice()
    order.items = cartList.map(({id, price, name}) => ({id, price, name}))

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')

      addDoc(queryCollection, order)

      .then(resp =>
        Swal.fire({
        title: "¡Compra realizada!",
        text: `Gracias por su compra. Id: ${resp.id}`
        }))
      .catch(err => console.log(err))
      .finally(() => emptyCart())

  }

  const handleOnChange = (e) => {
    setFormData({
      ... dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="finish-cart">
      <div className="cart-options">
        <h4 className="cart-total">El precio total es: $ {totalPrice()} </h4>
        <button className="cart-button" onClick={emptyCart}>Vaciar carrito</button>
      </div>
      <form className="cart-inputs" onSubmit={addOrder}>
          <input type="text" className="cart-user-info" value={dataForm.name} onChange={handleOnChange} name='name' placeholder="Ingrese su nombre" />
          <input type="text" className="cart-user-info" value={dataForm.phone} onChange={handleOnChange} name='phone' placeholder="Ingrese su número de teléfono" />
          <input type="text" className="cart-user-info" value={dataForm.email} onChange={handleOnChange} name='email' placeholder="Ingrese su mail" />
          <button className="cart-button-finish">Terminar compra</button>
      </form>
      { cartList.length !== 0 ?
      <div className="cart-container">
        {cartList.map(prod => 
        <div className="cart-item-container" key={prod.id}>
          <img src={prod.urlImage} alt="" className="cart-item-img" />
          <div className="cart-details">
            <h2 className="item-name" >{ prod.name }</h2>
            <h2 className="item-price" >$ { prod.price }</h2>
            <h2 className="item-count" >Cantidad: { prod.count }</h2>
            <button onClick={() => deleteItem(prod.id)} className="item-cancel"> Quitar del carrito </button>
          </div>
        </div>
          )
        }
      </div>
      
      :

      <div className="cart-home">
        <Link className="back-home" to='/'><h5>Ir al Home</h5></Link>
      </div>
}
    </div>
  )
}

export default CartContainer