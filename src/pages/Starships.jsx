import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function Starships() {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState([]);

  let path = useParams();

  useEffect(() => {
    getStarships(1)
  }, [setStarships]);

  const getStarships = async (page) => {
    const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
    setPage(page)
    const { results } = await response.json();
    setStarships(results);
  };

  function prevPage() {
    getStarships(page - 1);
  };

  function nextPage() {
    getStarships(page + 1);
  };

  return (
    <div>
      {
        starships.map((element) =>
          <div
            key={starships.indexOf(element)} >
            <h1>{element.name}</h1>
            <h1>{element.model}</h1>
            <Link to={`/starships/${element.url.substring(element.url.indexOf("/", 29), element.url.length - 1).replace("/", "")}`}>
              <button
                type="button"
              >Details
              </button>
            </Link>
          </div>
        )
      }
      <button onClick={prevPage}>
        Anterior
      </button>
      <button onClick={nextPage}>
        Próximo
      </button>
    </div >
  )
}

export default Starships;
