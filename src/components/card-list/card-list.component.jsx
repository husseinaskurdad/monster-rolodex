
import Card from "../card/card.component";
import './card-list.style.css'

// forwareded ref, next to the props, we'll see later

let CardList =  ({monsters}) => (
            <div className="card-list">
            {monsters.map(monster => {   
             return( 
          <Card  monster = {monster}/>
         )
        })}
             </div>
                                                                       
)



export default CardList