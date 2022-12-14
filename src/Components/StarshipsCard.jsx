import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext/useAuth";

function StarshipsCard(element) {
  const { data } = element
  const auth = useAuth()

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center m-3 w-56">
      <p className="text-gray-800">{data.name}</p>
      <div className="flex flex-col my-6">
        <p className="text-gray-800">Model: {data.model}</p>
      </div>
      <div className="flex flex-row space-x-1">
        {auth.email && (<Link to={`/starships/${data.url.substring(data.url.indexOf("/", 29), data.url.length - 1).replace("/", "")}`}>
          <button
            className="w-16 px-1 py-1 text-xs tracking-wide text-white transition-colors duration-200 transform bg-blue-100 hover:bg-blue-200 rounded-md ">
            Details
          </button>
        </Link>)}
      </div>
    </div>
  );
}

export default StarshipsCard;