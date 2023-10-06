
import "./card-style.css"

let Card =( {monster}) => {
 
        let {id, name, email} = monster
        return(
            <div className="card-container" key= {id}>
            <img alt="monster" src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        )
    }


export default Card