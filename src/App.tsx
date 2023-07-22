import { useState } from "react";

const App = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  //UPDATING OBJECTS
  // const handleClick = () => {
  //   const newDrink = {
  //     title: drink.title,
  //     price: 6,
  //   };
  //   setDrink(newDrink);
  // };

  //GOOD WAY TO UPDATE
  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
