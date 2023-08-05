import React, { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //Side effect
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
    </div>
  );
};

export default App;
