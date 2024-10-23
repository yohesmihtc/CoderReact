import { useState, useEffect} from "react"


const ItemCount = ({stock, initial,onAdd})=> {
    const [quantity, setQuantity] = useState(initial)


    useEffect(() =>{
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
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={handleSub}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={handleAdd}>+</button>
            </div>

            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>

        </div>
    )
}

export default ItemCount