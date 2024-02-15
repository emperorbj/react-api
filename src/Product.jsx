import { useEffect, useState } from "react"

const Product = () => {
    // let[name,setName] = useState('Mr.Bolaji')


    // function changeName(){
    //     setName('Mrs Opatola Oluwabusolami')
    // }

    //  // 1. use effect is called every rendering and rerendering
    // // 2. if you pass a second parameter as a blank array in the use effect call back function
   

    


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
    <div className="effect"> 
        
    </div>
    )
}

export default Product
