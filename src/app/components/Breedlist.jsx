import BreedCard from "./BreedCard";

const Breedlist = async ({ q }) => {
  const url = q
    ? q === ""
      ? "https://api.thedogapi.com/v1/breeds"
      : `https://api.thedogapi.com/v1/breeds/search?q=${q}`
    : "https://api.thedogapi.com/v1/breeds";

  const response = await fetch(url, {
    headers: { "x-api-key": process.env.API_KEY },
  });

  if (!response.ok) {
    return <p>Couldn't load breeds ({response.status}).</p>;
  }

  const breeds = await response.json();
  if (breeds.length < 1) {
    return <h1>There is no dog in search : "{q}"</h1>;
  } else {
    console.log(breeds);
    return (
      <div className="grid grid-cols-2 gap-(--s-spacing) mx-auto">
        {breeds.map((breed) => (
          <BreedCard className="" key={breed.id} breed={breed} />
        ))}
      </div>
    );
  }
};
export default Breedlist;
