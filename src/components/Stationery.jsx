import React from 'react'


export default function Stationery(props){
//const [newProduct,setNewProduct]=React.useState([...props])

// funcyion addProduct(){


// }

    return(
      
      
        <div>
            <h1>{props.name}</h1>
            <p>Rs-{props.price}- {props.description}</p>
         <hr/>
        
        </div>
      
    )
}