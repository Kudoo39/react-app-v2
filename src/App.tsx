import React from "react";
import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    contact: {
      address: {
        street: "",
      },
    },
  });

  return <div></div>;
};

export default App;
