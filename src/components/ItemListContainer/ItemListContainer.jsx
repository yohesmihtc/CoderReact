import { useState, useEffect } from "react"
import { products } from "../../data/products"
import ItemList from "../ItemList/Itemlist"

function ItemListContainer () {
    const [items, setItems]= useState([])

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
        <div>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer