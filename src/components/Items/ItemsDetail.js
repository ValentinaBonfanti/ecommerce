import React from "react";
import products from "../../listProducts";
import { Link, useParams } from "react-router-dom";

export default function ItemsDetail(){
    
    const { id } = useParams();
    return(
        <div>
            
            <div>{products[id-1].name}</div>
            <div>
              <h3>Descripcion:</h3>
              <p> {products[id-1].description}</p>
              </div>

        </div>
    )
}