import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './styles.css'
import MyInfo from './components/MyInfo'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from "./components/Contact"
import products from './components/products'
import Stationery from './components/Stationery'

function App() {
  const [count, setCount] = useState(0)

const productlist=products.map(product=>
<Stationery key={product.id} name={product.item} price={product.price} description={product.desc}/>)

  return (
    <>
    <Header/>
    {/* {productlist} */}
    

    <div className="todo-list">
     <MyInfo item="HTML"/>
     <MyInfo item="css"/>
     <MyInfo item="Java Script"/>
     </div>

      {/* <Contact contact={{name:"Abc", phone:"1234", address:"ayz"}}/>
      <Contact contact={{name:"def", phone:"1234", address:"lmn"}}/>
      <Contact contact={{name:"ghi", phone:"1234", address:"xyz"}}/> */}

     <Footer/>
   </>
  )
}

export default App
