import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function StarshipsDetails() {
  const [details, setDetails] = useState([]);

  const path = useParams();

  useEffect(() => {
    getStarships()
  }, [setDetails]);

  const getStarships = async () => {
    const response = await fetch(`https://swapi.dev/api/starships/${path.id}/`);
    const results = await response.json();
    setDetails(results);
  };

  return (
    <div>
      <h1>Name: {details.name}</h1>
      <h1>Mode: {details.model}</h1>
      <h1>Crew: {details.crew}</h1>
      <h1>Passengers: {details.passengers}</h1>
      <h1>StarshipClass: {details.starship_class}</h1>

      <Link to={`/`}>
        <button
          type="button"
        >Voltar
        </button>
      </Link>
    </div >
  )
}
export default StarshipsDetails
