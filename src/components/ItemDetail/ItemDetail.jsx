import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import styles from "./ItemDetail.module.css"
import { Link } from 'react-router-dom'

import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price }
        
        addItem(item, quantity)
    }

    return (
        <article className={styles.ItemDetail}>
            <header className={styles.Header}>
                <h2 className={styles.ItemTitle}>{name}</h2>
            </header>
            <picture className={styles.Picture}>
                <img src={img} alt={name} className={styles.ItemImage} />
            </picture>
            <section className={styles.Section}>
                <p className={styles.InfoText}>Categoria: {category}</p>
                <p className={styles.InfoText}>Descripcion: {description}</p>
                <p className={styles.Price}>Precio: ${price}</p>
            </section>
            <footer className={styles.Footer}>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail
