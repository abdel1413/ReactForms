import React, { useState } from "react";

function OnSubmitEv() {
  let [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`the name you entered was: ${name}`);
  };

  return (
    <div className="forms">
      <h2>
        {" "}
        Control submit action by adding event handler in onSubmit attribute{" "}
      </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name please
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
export default OnSubmitEv;
