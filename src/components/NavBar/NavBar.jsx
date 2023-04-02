import { Link, NavLink } from 'react-router-dom'
import { Cartwidget } from '../Cartwidget/Cartwidget'

const NavBar = () => {
  return (
    <div className="nav">
        <Link className='title' to='/'>Maikon <span>Store</span></Link>
        <NavLink className='carne' to="/category/carne" >CARNE</NavLink>
        <NavLink className='vegetal' to="/category/vegetal" >VEGETAL</NavLink>
        <Link className='cart' to='/cart'>
          <Cartwidget/>
        </Link>
    </div>
  )
}

export default NavBar