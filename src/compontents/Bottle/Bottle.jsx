// import { useState } from "react";
import "./Bottle.css";

const Bottle = ({ bottle, handlerAddCart }) => {
  const { name, img, price } = bottle;

  return (
    <div className="bottle">
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
      <button onClick={()=>handlerAddCart(bottle)}>
        BUY NOW
      </button>
    </div>
  );
};

export default Bottle;
