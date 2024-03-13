import PropTypes from "prop-types";
import "./Cart.css";
const Cart = ({ cart, handleRemveCart }) => {
  return (
    <div>
      <h3>Cart Bottle: {cart.length}</h3>
      <div className="cart-container">
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img}></img>
            <button className="btns" onClick={() => handleRemveCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemveCart: PropTypes.func.isRequired,
};
export default Cart;
