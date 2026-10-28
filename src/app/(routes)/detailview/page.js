import FavoritesList from "@/app/components/FavoritesList";

const FetchData = async () => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    headers: { "x-api-key": process.env.API_KEY },
  });

  if (!response.ok) {
    return <p>Couldn't load breeds ({response.status}).</p>;
  }
  const breeds = await response.json();
  return (
    <>
      <h1 className="place-self-center font-black text-2xl mb-4">Favorites</h1>
      <FavoritesList breeds={breeds} />
    </>
  );
};

export default FetchData;
