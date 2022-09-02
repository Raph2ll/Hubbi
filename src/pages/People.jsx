import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

function People() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState([]);

  let path = useParams();

  useEffect(() => {
    getPeoples(1)
  }, [setPeople]);

  const getPeoples = async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    setPage(page)
    const { results } = await response.json();
    setPeople(results);
  };

  function prevPage() {
    getPeoples(page - 1);
  };

  function nextPage() {
    getPeoples(page + 1);
  };
  return (
    <div>
      {(people.map((index) => <h1>{index.name}</h1>))}
      <button onClick={prevPage}>
        Anterior
      </button>
      <button onClick={nextPage}>
        Próximo
      </button>
    </div >
  )
}

export default People;
