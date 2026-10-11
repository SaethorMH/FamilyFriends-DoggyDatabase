import Link from "next/link";
import BreedCard from "./components/BreedCard";
import NavIcon from "./components/NavIcon";

export default function ListView() {
  return (
    <>
      <BreedCard />
      <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link>
      <NavIcon dest="/detailview" icon="house" />
      <NavIcon dest="/detailview" icon="star" />

      <NavIcon dest="/detailview" icon="comment" />
      <NavIcon dest="/detailview" icon="user" chosen />
    </>
  );
}
