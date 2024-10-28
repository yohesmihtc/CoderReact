import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import styles from './Item.module.css'

const Item = ({id, name, img, price, stock}) => {
  return (
      <article className={styles.CardItem}>
        <header className={styles.Header}>
            <h2 className={styles.ItemHeader}>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} className={styles.ItemImg} />
        </picture>
        <section className={styles.Section}>
            <p className={styles.Info}>Precio: ${price}</p>
            <p className={styles.Info}>Stock disponible: {stock}</p>
        </section>
        <footer className={styles.Footer}>
            <Link to={`/item/${id}`} className={styles.Option}>Ver detalles</Link>
        </footer>
    </article>
  )
}

export default Item
