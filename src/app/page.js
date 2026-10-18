import Link from "next/link";
import BreedCard from "./components/BreedCard";
import NavIcon from "./components/NavIcon";
import SearchBar from "./components/SearchBar";
import { breeds } from "./data/breeds";

export default function ListView() {
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-2 gap-(--s-spacing) mx-auto">
        {breeds.map((breed) => (
          <BreedCard
            className="shrink-0 grow-0 basis-full"
            key={breed.id}
            breed={breed}
          />
        ))}
      </div>
    </>
  );
}
