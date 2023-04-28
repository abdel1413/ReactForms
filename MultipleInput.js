import React, { useState } from "react";

function MyForm() {
  let [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("your inputs are:", inputs);
    setInputs({ inputs: "" });
  };

  //access the field to update the state
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    // use spread op to copy values and update
    //the name using[] arround the name
    setInputs((val) => ({ ...val, [name]: value }));
  };

  return (
    <div className="forms">
      <h2>Handling multiple input </h2>
      <ul>
        <li> Initialize state with empty object (useState({}))</li>
        <li> Adding name attribute to each input (nam=...)</li>
        <li>
          {" "}
          To access the field, use:
          <p> event.target.name </p>
          <p> event.target.value</p>
        </li>
        <li>
          To update the state, use square brackets [] around the property
          name([name]:value)
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Enter your name
          <input
            type="text"
            name="username"
            value={inputs.username || " "}
            onChange={handleChange}
          />
        </label>
        <label>
          {" "}
          What is your age?
          <input
            type="number"
            name="age"
            value={inputs.age || " "}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
export default MyForm;
