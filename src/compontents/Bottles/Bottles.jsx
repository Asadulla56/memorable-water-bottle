import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart, removeFromLS } from "../../Utilits/localStroage";
import Cart from "../Cart/Cart";
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
      console.log(storedCart,bottles);
      const saveCart = [];
      for(const id of storedCart){
        console.log(id)
        const bottle = bottles.find(bottle => bottle.id ===id);
        if(bottle){
          saveCart.push(bottle)
        }
      }
      console.log('save cart', saveCart)
      setCart(saveCart)

    }
  }, [bottles]);

  const handlerAddCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  };

  const handleRemveCart = id =>{
    const remainingCart = cart.filter(bottle =>bottle.id !==id)
    setCart(remainingCart);
    removeFromLS(id);
  }
  
  return (
    <div>
      <h2>Bottles Avaliable: {bottles.length}</h2>
      <Cart cart ={cart} handleRemveCart={handleRemveCart}></Cart>
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
