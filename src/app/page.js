import Link from "next/link";
import BreedCard from "./components/BreedCard";
import NavIcon from "./components/NavIcon";

export default function ListView() {
  return (
    <>
      <BreedCard />
      <BreedCard />
      <BreedCard />
      <BreedCard />
      <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link>
    </>
  );
}
