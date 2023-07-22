import { useState } from "react";

const App = () => {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
