
const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  } else {
    return [];
  }
};
const saveCartLS =(cart) =>{
    const cartStringFiy =JSON.stringify(cart);
    localStorage.setItem('cart',cartStringFiy)
}

const addToLS = id =>{
    const cart = getStoredCart();
    cart.push(id)
    //save cart local Stroage 
    saveCartLS(cart)

}
export {addToLS,getStoredCart}