import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Star Wars</h1>
      <Link to={"/People"}>
        <button
          type="button"
        >People
        </button>
      </Link>
      <Link to={"/starships"}>
        <button
          type="button"
        >Starships
        </button>
      </Link>
    </div>
  )
}

export default Home
