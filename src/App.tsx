import { useState } from "react";

const App = () => {
  const longContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus id tellus rhoncus tempus. Donec quis orci a massa tristique auctor et a ex. Duis hendrerit odio nec tellus rhoncus, eu tempor arcu tristique. Vestibulum nec quam turpis. Sed vel mi sed nisl fermentum gravida. Nunc tincidunt lectus nec neque faucibus, ut pharetra eros cursus. Duis eu consequat justo, eget consectetur metus.";

  const [content, setContent] = useState(false);
  const showMore = () => {
    setContent(!content);
  };

  const display = content ? longContent : `${longContent.slice(0, 30)}...`;

  return (
    <>
      <p>{display}</p>
      <button onClick={showMore}>More</button>
    </>
  );
};

export default App;
