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
        {
            product.map((item)=>{

                return (
                    <div className="product">
                        <h1>{item.title}</h1>
                        <h2>{item.price}</h2>
                        <img src={item.image} alt="" />
                    </div>
                )
                
            })
        }
    </div>
    )
}

export default Product
