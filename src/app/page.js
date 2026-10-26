import Link from "next/link";
import BreedCard from "./components/BreedCard";
import NavIcon from "./components/NavIcon";
import SearchBar from "./components/SearchBar";
// import { breeds } from "./data/breeds";
import { Suspense } from "react";
export default function ListView() {
  return (
    <>
      <SearchBar />
      <Suspense fallback="Loading dogs...">
        {/* <div className="grid grid-cols-2 gap-(--s-spacing) mx-auto">
          {breeds.map((breed) => (
            <BreedCard className="shrink" key={breed.id} breed={breed} />
          ))}
        </div> */}
        <FetchData />
      </Suspense>
    </>
  );
}

const FetchData = async () => {
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: { "x-api-key": process.env.API_KEY },
  });

  if (!response.ok) {
    return <p>Couldn't load breeds ({response.status}).</p>;
  }

  const breeds = await response.json();
  console.log(breeds);
  return (
    <div className="grid grid-cols-2 gap-(--s-spacing) mx-auto">
      {breeds.map((breed) => (
        <BreedCard className="shrink" key={breed.id} breed={breed} />
      ))}
    </div>
  );
};
