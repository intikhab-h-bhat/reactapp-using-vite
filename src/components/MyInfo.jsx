
import Reac from "react"
export default function MyInfo(){

const firstName="Intikhab"
const lastName="Bhat"
const date=new Date()
const hours=date.getHours()
let timeOfDay

// const styles={
//   backgroundColor:"blue"
// }


    return (
      
     <div className="todo-item">
      <input type="checkbox"/>
      <p>Hello {hours}</p>
      </div>

    )
  }