import { useState } from "react";
const App = () => {
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return (
    <div>
      {cart.items.map((item) => (
        <div key={item.id}>
          {item.title} - Quantity: {item.quantity}
        </div>
      ))}
      <button onClick={handleClick}>Updating items</button>
    </div>
  );
};

export default App;
