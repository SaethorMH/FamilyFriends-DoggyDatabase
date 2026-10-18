import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { breeds } from "@/app/data/breeds";

import FavoriteButton from "@/app/components/FavoriteButton";
const traitColors = [
  "bg-green-200 text-green-950",
  "bg-yellow-200 text-yellow-950",
  "bg-orange-200 text-orange-950",
  "bg-red-200 text-red-950",
  "bg-purple-200 text-purple-950",
  "bg-blue-200 text-blue-950",
  "bg-violet-200 text-violet-950",
];
export default async function DetailView({ params }) {
  const { slug } = await params;
  const breed = breeds.find((b) => b.slug === slug);

  if (!breed) notFound();

  return (
    <>
      <div className="grid  max-w-md">
        <Image
          src="/dummydog.jpg"
          width={360}
          height={360}
          alt=""
          className="rounded-4xl col-1 row-1"
        />
        <Link
          href="/"
          className="bg-white text-(--color-text) text-5xl col-1 row-1 place-self-start m-(--s-spacing) w-15 h-15 rounded-full p-1 text-center"
        >
          {"<"}
        </Link>
        <FavoriteButton
          slug={breed.slug}
          className="col-1 row-1 self-start justify-self-end size-10 m-(--s-spacing)"
        />
        <div className=" flex gap-4 p-2 col-1 row-1 self-end m-(--s-spacing) mr-auto backdrop-blur-3xl rounded-2xl">
          <Image
            src="/dummydog.jpg"
            width={50}
            height={50}
            alt=""
            className="rounded-2xl "
          />
          <p className="text-white min-w-10">{breed.name}</p>
        </div>
      </div>

      <h1>{breed.name}</h1>
      <ul className="flex justify-around">
        {breed.traits.map((trait, i) => (
          <li
            key={trait}
            className={`${traitColors[i % traitColors.length]} rounded-full p-2 text-sm w-fit`}
          >
            {trait}
          </li>
        ))}
      </ul>

      <p className="text-gray-500 text-[13px] mt-2">Breed description</p>
      <p>{breed.descriptionLong}</p>
      <p className="text-gray-500 text-[13px] mt-2">Breed History</p>
      <p>{breed.history}</p>
      <Link href="/">Back to list</Link>
    </>
  );
}
