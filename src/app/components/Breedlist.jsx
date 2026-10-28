import BreedCard from "./BreedCard";

const Breedlist = async ({ q }) => {
  const url = q
    ? q === ""
      ? "https://api.thedogapi.com/v1/breeds"
      : `https://api.thedogapi.com/v1/breeds/search?q=${q}`
    : "https://api.thedogapi.com/v1/breeds";
  const headers = {
    headers: { "x-api-key": process.env.API_KEY },
    cache: "no-store",
  };
  const [breedsResponse, favoritesResponse] = await Promise.all([
    fetch(url, headers),
    fetch("https://api.thedogapi.com/v1/favourites", headers),
  ]);
  const [breeds, favorites] = await Promise.all([
    breedsResponse.json(),
    favoritesResponse.json(),
  ]);
  if (!breedsResponse.ok) {
    return <p>Couldn't load breeds ({breeds.status}).</p>;
  }
  console.log("Favorites are: ", favorites);
  const favoriteIds = new Set(
    favoritesResponse.ok ? favorites.map((fav) => fav.image_id) : [],
  );
  if (breeds.length < 1) {
    return <h1>There is no dog in search : "{q}"</h1>;
  } else {
    console.log(breeds);
    return (
      <div className="grid grid-cols-2 gap-(--s-spacing) mx-auto">
        {breeds.map((breed) => (
          <BreedCard
            className=""
            key={breed.id}
            favorite={
              favoriteIds.has(breed.image?.id) ? "isFavorite" : "notFavorite"
            }
            breed={breed}
          />
        ))}
      </div>
    );
  }
};
export default Breedlist;
