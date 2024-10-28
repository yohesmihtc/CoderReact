import CartWidget from "../CartWidget/CardWidget"
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css' // Importa el CSS Module

const NavBar = () => {
  return (
    <nav className={styles.Navbar}>
      <Link to='/'><h3 className={styles.logo}>TSL</h3></Link>
      <div className={styles.Categories}>
        <NavLink to={`/category/t-shirts`} className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>T-shirts</NavLink>
        <NavLink to={`/category/garrafas`} className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Garrafas</NavLink>
        <NavLink to={`/category/proteinas`} className={({ isActive }) => isActive ? styles.ActiveOption : styles.Option}>Proteinas</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar
