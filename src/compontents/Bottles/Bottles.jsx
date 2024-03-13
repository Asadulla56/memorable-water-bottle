import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart } from "../../Utilits/localStroage";
const Bottles = () => {
  const [bottles, setBettoles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBettoles(data));
  }, []);

  // load cart local stroage
  useEffect(() => {
    console.log("called to load data", bottles.length);
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);
    }
  }, [bottles]);

  const handlerAddCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h2>Bottles Avaliable: {bottles.length}</h2>
      <h3>Cart Bottle: {cart.length}</h3>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handlerAddCart={handlerAddCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
