import { useState } from "react";

import "./App.css";
import Navbar from "./navbar";
import Cart from "./cart";
import { produce } from "immer";

function App() {
  const [items, setItems] = useState(["Product 1", "Product 2"]);

  //Exercise 1 : Change player name
  const [player, setPlayer] = useState({
    id: 1,
    details: {
      name: "Muruga",
    },
  });

  const changePlayerName = () => {
    //Way 1 :
    setPlayer({
      ...player,
      details: { ...player.details, name: "Updated Murugar Name" },
    });
    //Way 2: Use Immer
  };

  //Exercise 2 : Add Toppings
  const [pizza, setPizza] = useState({
    name: "Spicy Pizza",
    toppings: ["Mushroom"],
  });

  const addToppings = () => {
    //Way 1 :
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Spice"] });
    //Way 2: Use Immer
  };

  //Exercise 3 : Increase quantity of Id 1
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });

  const increaseQuantity = () => {
    setCart({
      ...cart,
      items: cart.items.map((i) =>
        i.id === 1 ? { ...i, quantity: i.quantity + 1 } : i
      ),
    });
  };

  return (
    <>
      <Navbar count={items.length} />
      <Cart items={items}></Cart>

      <button
        onClick={() => {
          setItems([...items, "Product " + (items.length + 1)]);
        }}
      >
        Add Item
      </button>
      <button onClick={() => setItems([])}>Clear Cart</button>

      <br />
      <div>{player.details.name}</div>
      <button onClick={changePlayerName}> Change Player Name</button>
      <br />
      <div>{JSON.stringify(pizza)}</div>
      <button onClick={addToppings}> Add more toppings</button>
      <br />
      <div>{JSON.stringify(cart)}</div>
      <button onClick={increaseQuantity}> Increase quantity</button>
    </>
  );
}

export default App;
