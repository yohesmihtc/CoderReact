import cart from './assets/cart.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext)
    
    return(
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        <div>
            <img className='CartImg' src={cart} alt='cart-widget'/>
            { totalQuantity }
        </div>
        </Link>
    )
}

export default CartWidget