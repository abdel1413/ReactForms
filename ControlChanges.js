import React, { useState } from "react";
function OnChangeEv() {
  let [name, setName] = useState("");

  return (
    <div className="forms">
      <h2> Changes are controlled in the onChange attribute</h2>
      <form>
        <label>
          {" "}
          Enter your name
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

export default OnChangeEv;
