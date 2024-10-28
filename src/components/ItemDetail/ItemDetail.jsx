import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import styles from './ItemDetail.module.css';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);
        const item = { id, name, price };
        addItem(item, quantity);
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>
        </article>
    );
}

export default ItemDetail;
