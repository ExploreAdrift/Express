import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [category, setCategory] = useState("people");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const onSelectedChange = (e) => {
    setCategory(e.target.value);
  };

  //

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(category, id);

    navigate(category + "/" + id);
  };

  // When the user clicks the submit input in the form,
  //we will navigate to the "/results" path

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>SEARCH:</label>
        <select onChange={onSelectedChange} name="category" value={category}>
          {/* <option value="none"> Select a category:</option> */}
          <option value="people">Star Wars Legend:</option>
          <option value="planets">Planets:</option>
        </select>
        <label>Character ID:</label>
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          name="id"
          value={id}
        />
        <button type="submit">SEARCH!</button>
      </form>
    </div>
  );
};

export default Main;
