import React from "react";
import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


export default function ItemDetail  ({ detail,  id })  {

  let { title, price, img, stock, description } = detail;

  const {isInCart, addToCart} = useContext(CartContext);
  const [cant, setCant] = useState(0)

  const [count, setCount] = useState(1)

  const sumar = () => {
    count < stock ? setCount(count + 1) : alert('No hay suficiente stock')
  }
  const restar = () => {
    count > 1 ? setCount(count - 1) : alert('La cantidad no puede ser menor que 1')
  }


  const agregar = (count) => {
    if (count === 1) {
      alert(`Se agregó ${title} al carrito`);
    } else {	
    alert(`Se agregaron ${count} ${title} al carrito.`);
    }
    setCant(count);
    addToCart(detail, count, id);
    isInCart(id);
  }
  return (
    <>
        <>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 p-2 text-center">
            <img src={img} alt='imagen' />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <h2 className="detail-nombre">{title}</h2>
              <p className="detail-precio">Precio: $ {price}</p>
              <p className="detail-detalle">Descripcion: {description}</p>
              <p className="detail-details">Stock disponible: {stock}</p>
              <div>
              {cant > 0 ?
               <>
                <Link to ={"/cart"}><Button variant="success" size="lg">Ir al Carrito</Button>{' '}</Link>
                <Link to = {"/"}><Button variant="danger" size="lg">Seguir comprando</Button>{' '}</Link>
                </>
               :
               <ItemCount stock={stock} initial={1} onAdd={agregar} sumar={sumar} restar={restar} count={count}/> 
            }
          </div> 
          </div>
          </div>
        </>
    </>
  );
};
