import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
  return (
    <article className='CardItem'>
        <header className='Header'>
            <h2 className='ItemHeader'>
              {name}
            </h2>
        </header>

        <picture>
            <img src={img} alt={name} className='ItemImg'/>
        </picture>
        
        <section>
            <p className='info'>
              Precio: ${price}
            </p>
            <p className='info'>
              Stock disponible: ${stock}
            </p>
        </section>
        <footer className='Item'>
            <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
        </footer>
    </article>

    
  )
}

export default Item