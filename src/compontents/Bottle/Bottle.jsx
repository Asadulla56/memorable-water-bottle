// import { useState } from "react";
import PropTypes from 'prop-types';
import "./Bottle.css";

const Bottle = ({ bottle, handlerAddCart }) => {
  const { name, img, price } = bottle;

  return (
    <div className="bottle">
      <h3>Bottle: {name}</h3>
      <img src={img} alt="" />
      <p>Price: ${price}</p>
      <button className='btn' onClick={()=>handlerAddCart(bottle)}>
        BUY NOW
      </button>
    </div>
  );
};
Bottle.propTypes ={
bottle : PropTypes.object.isRequired,
handlerAddCart : PropTypes.func.isRequired
}
export default Bottle;
