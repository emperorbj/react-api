import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {

  // let[showPage,setPage] = useState(true)

  return (
    <div>
      {/* <h1>UseEffect tutorial</h1>
      <button onClick={()=>{
        setPage(true)
      }}>show</button>

<button onClick={()=>{
        setPage(false)
      }}>change</button>

      {
        showPage === true?(<Product/>):(<h1>response successful</h1>)
      } */}
      <Product/>
      
    </div>
  )
}

export default App
