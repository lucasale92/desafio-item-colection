import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Item ({ producto })  {
  return (    
<Card className="imagen">
<Card.Body>
    <Card.Title className="cart-title">{producto.name}</Card.Title>

    <Card.Text className="cardText">
    <Card.Img variant="top" src={producto.img} />
      {producto.description}
      <br />
      Precio: ${producto.price}
      <br />
      Stock: {producto.stock}
    </Card.Text>
    <Link to={"/producto/" + producto.id} className="boton">Ver detalle</Link>
  </Card.Body>
</Card>
  )
  }

