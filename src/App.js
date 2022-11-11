import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cartItems, setCartItems] = useState([]); // elements: name
  const [totalCost, setTotalCost] = useState(0);


  function addItem(index, name, price) {
    // update carItems
    let newCartItems = cartItems
    if (newCartItems[index] == undefined) {
      newCartItems[index] = [name, 1]
    } else {
      newCartItems[index][1] += 1
    }

    setCartItems(newCartItems)
    console.log(cartItems)
    console.log(price)
    setTotalCost(prevVal => prevVal + price)
  }


  return (
    <div className="App">
      <h1 className="Title">Ian's Bakery</h1>

      <div className="Content">
        <div className="Items">
          {bakeryData.map((item, index) => (
            <BakeryItem 
              name={item.name}
              desc={item.description}
              price={item.price}
              img={item.image}
              addItem={() => addItem(index, item.name, item.price)}></BakeryItem> // replace with BakeryItem component
          ))}
        </div>

        <div className="Cart">
          <h2>Cart</h2>
            <ul>
              {cartItems.map(item => (
                <CartItem
                  count={item[1]}
                  name={item[0]}>
                </CartItem>
              ))}
            </ul>
            <h2>Total: ${Math.floor(totalCost*100)/100}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
