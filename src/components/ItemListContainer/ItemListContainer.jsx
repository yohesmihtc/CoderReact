import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import ItemList from "../ItemList/Itemlist"

function ItemListContainer () {
    const [items, setItems]= useState([])
    const { id }= useParams()

    console.log(id)

    const getProducts = () => new Promise((res, rej) => {
        if (products.length == 0){
            rej('el array esta vacio')
        }
        setTimeout(() => {
          res(products)
        }, 3000)
      })

    useEffect(() =>{
        getProducts()
        .then(res => setItems(res))
    },[])

    return(
            <ItemList items={items}/> 
    )
}

export default ItemListContainer