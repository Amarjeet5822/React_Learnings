import React, { useState, useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'

function App() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products")
                const data = await response.json()
                setProducts(data);
            } catch (error) {
                console.log("Error" , error)
            }
        }
        fetchData();    
    },[])
    
    console.log(products);
    return (
        <div>
            {products?.map(item=>{
                const {id="", title=""} = item || {};
                return <div key={id}>Title: {title}</div>
            })}
        </div>
    )
}

export default App
