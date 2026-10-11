import Link from "next/link";
import Logo from "./components/Logo";
import Notification from "./components/Notification";
import BreedCard from "./components/BreedCard";

export default function ListView() {
  return (
    <>
      <BreedCard />
      <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link>
    </>
  );
}
