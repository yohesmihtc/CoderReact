import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProducts} from "../../data/asyncMock"
import ItemList from "../ItemList/Itemlist"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const assynFunc = categoryId ? getProductsByCategory : getProducts

        assynFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/> 
        </div>
    )
}

export default ItemListContainer