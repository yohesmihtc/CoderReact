import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProducts } from "../../data/asyncMock"

function ItemDetailContainer(){
    const [product, setProduct] = useState(null)

    const { itemId} = useParams()

    useEffect(() =>{
        getProductById('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error =>{
            console.error(error)
        })
    })
    

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer