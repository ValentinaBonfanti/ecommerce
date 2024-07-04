import React from "react";
import { Link } from "react-router-dom";



export default function ItemsCard({id, name, img, description, price}) {
    return(
        <div>
          <Link to={`/items/${id}`}>
          <div>
             <div>
              <img src={img} alt="img not found" width="200px" height="250px"/>
             </div>
            <div>
               <h3>{name}</h3>
             </div>
             <div>
               <h2>{description}</h2>
             </div>
             <div>
               <h3>{price}</h3>
             </div>
             <div>
             </div>
          </div>
       </Link>
      </div>
    )
}