import { useState } from "react";
const App = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, ", Cheese"] });
  };

  return (
    <div>
      {pizza.toppings}
      <button onClick={handleClick}>Adding toppings</button>
    </div>
  );
};

export default App;
