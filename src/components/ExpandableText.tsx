import React from "react";
import { useState } from "react";

interface Props {
  onClick: () => void;
  children: string;
  maxChars: number;
}

const ExpandableText = ({ onClick, children, maxChars }: Props) => {
  const [content, setContent] = useState(false);

  const showMore = () => {
    setContent(!content);
  };

  const display = content ? children : `${children.slice(0, maxChars)}...`;
  return (
    <>
      <p>{display}</p>
      <button onClick={showMore}>{content ? "Less" : "More"}</button>
    </>
  );
};

export default ExpandableText;
