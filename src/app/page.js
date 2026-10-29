import Link from "next/link";
import BreedCard from "./components/BreedCard";
import NavIcon from "./components/NavIcon";
import SearchBar from "./components/SearchBar";
// import { breeds } from "./data/breeds";
import { Suspense } from "react";
import Breedlist from "./components/Breedlist";
export default async function ListView({ searchParams }) {
  console.log(await searchParams);
  const { q } = await searchParams;
  return (
    <>
      <SearchBar />
      <Suspense key={q} fallback="Loading dogs...">
        {/* <div className="grid grid-cols-2 gap-(--s-spacing) mx-auto">
          {breeds.map((breed) => (
            <BreedCard className="shrink" key={breed.id} breed={breed} />
          ))}
        </div> */}
        <Breedlist q={q} />
      </Suspense>
    </>
  );
}
