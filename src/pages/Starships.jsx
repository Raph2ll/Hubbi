import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Card from "../Components/StarshipsCard";
import Nav from "../Components/Nav";

function Starships() {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState([]);

  let path = useParams();

  useEffect(() => {
    getStarships(1)
  }, [setStarships]);

  const getStarships = async (page) => {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    if (response.ok == false) {
      console.log("Page not found")
    } else {
      setPage(page)
      const { results } = await response.json();
      setStarships(results);
    }
  };

  function prevPage() {
    getStarships(page - 1);
  };

  function nextPage() {
    getStarships(page + 1);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex justify-center flex-row flex-wrap">
        {
          starships.map((element) =>
            <Card key={starships.indexOf(element)} data={element} />
          )
        }
      </div>
      <div className="inline-flex justify-center">
        <button onClick={prevPage}
          className="bg-blue-100 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <button onClick={nextPage}
          className="bg-blue-100 hover:bg-gray-400 text-white font-bold  py-2 px-4 rounded-r">
          Next
        </button>
      </div>
    </div >
  )
}

export default Starships;
