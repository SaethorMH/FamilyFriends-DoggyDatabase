import Link from "next/link";
import Logo from "./components/Logo";
import BreedCard from "./components/BreedCard";
import "./globals.css";

export default function ListView() {
  return (
    <>
      <Logo />
      <BreedCard />
      <h2>ListView</h2>
      <Link href="/detailview">Go to DetailView</Link>
    </>
  );
}
