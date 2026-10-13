import Link from "next/link";
import BreedCard from "./components/BreedCard";
import NavIcon from "./components/NavIcon";

const breeds = [
  {
    id: "1",
    name: "Pug",
    from: "China",
    description:
      "Small, wrinkly, and permanently confused. Snores louder than most people.",
  },
  {
    id: "2",
    name: "Great Pyrenees",
    from: "Pyrenees Mountains, France",
    description:
      "A giant fluffy guardian who takes its job very seriously, mostly by lying in the middle of the floor.",
  },
  {
    id: "3",
    name: "Chow Chow",
    from: "Northern China",
    description: "Looks like a lion, acts like a cat. Blue-black tongue.",
  },
  {
    id: "4",
    name: "Cavalier King Charles Spaniel",
    from: "England",
    description:
      "Gentle, affectionate, and always ready for a cuddle. Will follow you from room to room just in case you do something interesting.",
  },
  {
    id: "5",
    name: "Husky",
    from: "Siberia",
    description:
      "Dramatic, vocal, and an escape artist. Will argue with you in full sentences.",
  },
  {
    id: "6",
    name: "Dachshund",
    from: "Germany",
    description:
      "Long body, short legs, enormous personality. Believes it is much bigger than it is.",
  },
  {
    id: "7",
    name: "Shiba Inu",
    from: "Japan",
    description:
      "Independent and sassy, with a famously dramatic scream when it doesn't get its way.",
  },
  {
    id: "8",
    name: "Bernese Mountain Dog",
    from: "Bern, Switzerland",
    description:
      "A big, sweet, tri-colored lump of fluff that wants to lean on you. Sadly, they don't live very long, so hug them extra.",
  },
  {
    id: "9",
    name: "Lab",
    from: "Newfoundland, Canada",
    description:
      "Friendly, food-motivated, and convinced everyone is its best friend.",
  },
  {
    id: "10",
    name: "Placeholder dog",
    from: "Paris, Texas",
    description: "This is a very peceulear dog it looks crased",
  },
];

export default function ListView() {
  return (
    <>
      {breeds.map((breed) => (
        <BreedCard key={breed.id} breed={breed} />
      ))}
    </>
  );
}
