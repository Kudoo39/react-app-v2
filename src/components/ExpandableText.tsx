import React from "react";
import { useState } from "react";

// interface Props {
//   children: string;
//   maxChars: number;
// }

// const ExpandableText = ({ children, maxChars }: Props) => {
//   const [content, setContent] = useState(false);

//   const showMore = () => {
//     setContent(!content);
//   };

//   const display = content ? children : `${children.slice(0, maxChars)}...`;
//   return (
//     <>
//       <p>{display}</p>
//       <button onClick={showMore}>{content ? "Less" : "More"}</button>
//     </>
//   );
// };

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpand] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <p>
      {text}...
      <button onClick={() => setIsExpand(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
