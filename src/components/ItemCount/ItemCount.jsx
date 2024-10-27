import { useState, useEffect} from "react"
import styles from './ItemCount.module.css'


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)


    useEffect(() => {
        console.log("Se monto ItemCount")
    }, [quantity])


    const handleAdd =() => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const handleSub =()=> {
        if (quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={styles.Counter}>
            <div className={styles.Controls}>
                <button className={styles.Button} onClick={handleSub}> - </button>
                <h4 className={styles.Number}> {quantity} </h4>
                <button className={styles.Button} onClick={handleAdd}> + </button>
            </div>

            <div>
                <button className={styles.Button} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>

            

        </div>
    )
}

export default ItemCount