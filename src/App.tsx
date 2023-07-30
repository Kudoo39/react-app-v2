import React from "react";
import ExpandableText from "./components/ExpandableText";

const App = () => {
  const longContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus id tellus rhoncus tempus. Donec quis orci a massa tristique auctor et a ex. Duis hendrerit odio nec tellus rhoncus, eu tempor arcu tristique. Vestibulum nec quam turpis. Sed vel mi sed nisl fermentum gravida. Nunc tincidunt lectus nec neque faucibus, ut pharetra eros cursus. Duis eu consequat justo, eget consectetur metus.";

  return (
    <>
      <div>
        <ExpandableText onClick={() => {}} maxChars={30}>{longContent}</ExpandableText>
      </div>
    </>
  );
};

export default App;
