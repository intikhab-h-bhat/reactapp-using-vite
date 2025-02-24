
import Reac from "react"
export default function MyInfo(props){

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
      <p>{props.item}</p>
      <hr/>
      </div>

    )
  }