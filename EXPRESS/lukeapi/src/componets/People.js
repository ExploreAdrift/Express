import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/" + id)
      .then((response) => {
        setPeople(response.data);
      })
      .catch(console.log);
  }, [id]);

  if (people == null) {
    return "Patience, young padawon";
  }

  return (
    <div>
      <h1>Name: {people.name}</h1>
      <p>Height: {people.height}</p>
      <p>Mass: {people.mass}</p>
      <p>Hair Color: {people.hair_color}</p>
      <p>Skin Color: {people.skin_color}</p>
      <p>Eye Color: {people.eye_color}</p>
    </div>
  );
};
export default People;
