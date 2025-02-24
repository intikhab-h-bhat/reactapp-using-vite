
export default function Contact(props){

    return(
        <div className="cont-details">
        <img src="" />
        <h1>{props.contact.name}</h1>
        <p>{props.contact.phone}</p>
        <p>{props.contact.address}</p>
        </div>
    )
}