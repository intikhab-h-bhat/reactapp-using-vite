import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import './styles.css'
import MyInfo from './components/MyInfo'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from "./components/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    {/* <div className="todo-list">
     <MyInfo/>
     <MyInfo/>
     <MyInfo/>
     </div> */}

      {/* <Contact contact={{name:"Abc", phone:"1234", address:"ayz"}}/>
      <Contact contact={{name:"def", phone:"1234", address:"lmn"}}/>
      <Contact contact={{name:"ghi", phone:"1234", address:"xyz"}}/> */}

     <Footer/>
   </>
  )
}

export default App
