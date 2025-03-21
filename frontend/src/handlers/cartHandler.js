export const addToCartHandler = (product, quantity, navigate) => {
  if (product.countInStock >= quantity) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedCartItems = [...cartItems, { product, quantity }];

    console.log("Product ID:", product._id); 
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    navigate(`/cart?id=${product._id}&quantity=${quantity}`);
  } else {
    alert("Product is out of stock!");
  }
};
