import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductById } from "../../data/asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [itemId])
    

    return (
        <div className="ItemDetailContainer">
            {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
        </div>
    )
    
}

export default ItemDetailContainer