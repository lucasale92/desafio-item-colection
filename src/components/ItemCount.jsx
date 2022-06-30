import React, { useState, useContext } from "react";
import { CartContext } from '../context/CartContext';

export default function ItemCount({ onAdd, sumar, restar, stock, count }) {
    const {cart, addToCart} = useContext(CartContext);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={sumar} className="botonUno">
        +
      </button>
      <p className="item-count">{ count }</p>
      <button onClick={restar} className="botonDos">
        -
      </button>
      <button
        onClick={() => {
          onAdd(count);
        }}
        className="botonCuatro"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

