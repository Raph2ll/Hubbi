import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Card from "../Components/PeopleCard";

function People() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState([]);

  let path = useParams();

  useEffect(() => {
    getPeoples(1)
  }, [setPeople]);

  const getPeoples = async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (response.ok == false) {
      console.log("Page not found")
    } else {
      setPage(page)
      const { results } = await response.json();
      setPeople(results);
    }
  };

  function prevPage() {
    getPeoples(page - 1);
  };

  function nextPage() {
    getPeoples(page + 1);
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex justify-center flex-row flex-wrap">
        {
          people.map((element) =>
            <Card key={people.indexOf(element)} data={element} />
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

export default People;
