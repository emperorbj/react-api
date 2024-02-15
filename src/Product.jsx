import { useEffect, useState } from "react"

const Product = () => {
    // let[name,setName] = useState('Mr.Bolaji')


    // function changeName(){
    //     setName('Mrs Opatola Oluwabusolami')
    // }

    //  // 1. use effect is called every rendering and rerendering
    // // 2. if you pass a second parameter as a blank array in the use effect call back function
    // // it will only render once the first time. That array is called DEPENDENCY ARRAY( because we can pass dependencies in them)
    // // 3. variables called within the dependency array renders the use effect call back
    // // 4. if we want to do anything when a component unmounts we put another function in the
    // // use effect call back.
    // // we can use multiple useEffect in a single component.
    // useEffect(()=>{
    //     console.log('rendering on its own')

    


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
