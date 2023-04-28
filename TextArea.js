import React, { useState } from "react";

function TextArea() {
  let [textarea, setTextarea] = useState(
    "The value for the text area goes in value attribute"
  );

  const handleChages = () => {
    setTextarea((e) => e.target.value);
  };

  return (
    <div>
      <h2> In React, the value of text area goes in value attribute</h2>
      <form>
        <textarea value={textarea} onChange={handleChages}></textarea>
      </form>
    </div>
  );
}

export default TextArea;
