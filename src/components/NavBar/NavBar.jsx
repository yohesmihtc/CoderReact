import CartWidget from "../CartWidget/CardWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="Navbar">
      <Link to='/'><h3>TSL</h3></Link>
      <div className="Categories">
        <NavLink to={`/category/t-shirts`} className={({ isActive}) => isActive? 'ActiveOption': 'Option' }>T-shirts</NavLink>
        <NavLink to={`/category/garrafas`} className={({ isActive}) => isActive? 'ActiveOption': 'Option' }>Garrafas</NavLink>
        <NavLink to={`/category/proteinas`} className={({ isActive}) => isActive? 'ActiveOption': 'Option' }>Proteinas</NavLink>
      </div>
      <CartWidget/>
    </nav>

  )
}

export default NavBar