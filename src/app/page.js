import Link from "next/link";
import BreedCard from "./components/BreedCard";
import NavIcon from "./components/NavIcon";

import { breeds } from "./data/breeds";

export default function ListView() {
  return (
    <>
      {breeds.map((breed) => (
        <BreedCard key={breed.id} breed={breed} />
      ))}
    </>
  );
}
