import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";

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
    <div className="flex flex-col min-h-screen items-center">
      <Nav />
      <div className="flex justify-center items-center flex-row flex-wrap bg-white p-6 rounded-lg shadow-md m-3 w-56">
        <h1p className="text-gray-800">{details.name}</h1p>
        <div className="flex flex-col my-6">
          <p className="text-gray-800">Name: {details.name}</p>
          <p className="text-gray-800">Model: {details.model}</p>
          <p className="text-gray-800">Crew: {details.crew}</p>
          <p className="text-gray-800">Passengers: {details.passengers}</p>
          <p className="text-gray-800">StarshipClass: {details.starship_class}</p>
        </div>
      </div>
    </div >
  )
}
export default StarshipsDetails
