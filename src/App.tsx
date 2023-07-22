import { useState } from "react";

const App = () => {
  const [tags, setTags] = useState(["happy", "fun"]);

  const handleClick = () => {
    //Add
    setTags([...tags, "exciting"]);

    //Remove
    //setTags(tags.filter((tag) => tag !== "happy"));

    //Update
    //setTags(tags.map((tag) => (tag === "happy" ? "so-happy" : tag)));
  };

  return (
    <div>
      {tags}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
