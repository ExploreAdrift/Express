import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/" + id)
      .then((response) => {
        setPlanets(response.data);
      })
      .catch(console.log);
  }, [id]);

  if (planets == null) {
    return "Patience, young padawon";
  }
  return (
    <div>
      <h1>Name: {planets.name}</h1>
      <p>Climate: {planets.climate}</p>
      <p>Terrain: {planets.terrain}</p>
      <p>Surface Water: {planets.surface_water}</p>
      <p>Population: {planets.population}</p>
    </div>
  );
};

export default Planets;
