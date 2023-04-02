import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useCartContext } from '../../context/CartContext'

export const Cartwidget = () => {

  const {totalCount} = useCartContext()
  return (
    <div>
      {totalCount() !== 0 && totalCount()}
        <AiOutlineShoppingCart/>
    </div>
  )
}
AiOutlineShoppingCart
