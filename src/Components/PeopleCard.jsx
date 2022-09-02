function PeopleCard(element) {
  const { data } = element
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center m-3 w-56">
      <p className="text-gray-800">{data.name}</p>
      <div className="flex flex-col my-6">
        <p className="text-gray-800">Height: {data.height}</p>
        <p className="text-gray-800">Hair color: {data.hair_color}</p>
        <p className="text-gray-800">Skin color : {data.skin_color}</p>
        <p className="text-gray-800">Eye color : {data.eye_color}</p>
      </div>
    </div>
  );
}

export default PeopleCard;