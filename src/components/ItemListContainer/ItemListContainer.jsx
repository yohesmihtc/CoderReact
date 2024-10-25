import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../data/asyncMock"
import ItemList from "../ItemList/Itemlist"

function ItemListContainer ({items}) {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const assynFunc = categoryId ? getProductsByCategory : getProducts

        assynFunc(categoryId)
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [categoryId])

    useEffect(() =>{
        getProducts()
        .then(response =>{
            setProducts(response)
        })
        .catch(error =>{
            console.log(error)
        }
        )
    }, [])

    return(
            <ItemList items={products}/> 
    )
}

export default ItemListContainer