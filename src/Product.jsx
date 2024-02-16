import { useEffect, useState } from "react"

const Product = () => {

    // WORKING WITH API 

    let[product,setProduct] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then((response)=>response.json())
            .then((data)=>{
                    console.log(data)
                setProduct(data);
            
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])
    return (
    <div className="products"> 
        
    </div>
    )
}

export default Product
