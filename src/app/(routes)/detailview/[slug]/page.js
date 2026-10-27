import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
// import { breeds } from "@/app/data/breeds";
import { Suspense } from "react";

import FavoriteButton from "@/app/components/FavoriteButton";
const traitColors = [
  "bg-(--green-light) text-(--green-dark)",
  "bg-(--yellow-light) text-(--yellow-dark)",
  "bg-(--orange-light) text-(--orange-dark)",
  "bg-(--red-light) text-(--red-dark)",
  "bg-(--purple-light) text-(--purple-dark)",
  "bg-(--blue-light) text-(--blue-dark)",
  "bg-(--violet-light) text-(--violet-dark)",
];
export default async function DetailView({ params }) {
  const { slug: id } = await params;
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: { "x-api-key": process.env.API_KEY },
  });
  console.log(
    "id:",
    id,
    "status:",
    response.status,
    await response.clone().text(),
  );

  if (!response.ok) notFound();
  const breed = await response.json();
  return (
    <>
      <div className="grid  max-w-md">
        <Suspense fallback="Loading picture...">
          <Image
            src={breed.image.url ?? "/dummydog.jpg"}
            width={360}
            height={360}
            alt={`Picture of ` + breed.name}
            // style={{ viewTransitionName: `img-${breed.id}` }}
            className="rounded-4xl col-1 row-1 object-cover w-full"
          />
        </Suspense>
        <Link
          href="/"
          className="bg-white text-(--color-text) font-black text-2xl col-1 row-1 place-self-start m-(--s-spacing) w-10 h-10 rounded-full p-1 text-center"
        >
          {"<"}
        </Link>
        <FavoriteButton
          slug={String(breed.id)}
          className="col-1 row-1 self-start justify-self-end size-10 m-(--s-spacing)"
        />
        <div className=" flex gap-4 p-2 col-1 row-1 self-end m-(--s-spacing) mr-auto backdrop-blur-md rounded-2xl">
          <Image
            src={breed.image.url ?? "/dummydog.jpg"}
            width={50}
            height={50}
            alt={`Picture of ` + breed.name}
            className="rounded-2xl "
          />
          <p className="text-white min-w-10">{breed.name}</p>
        </div>
      </div>

      <h1 className="text-[28px] font-bold mt-4"> {breed.name}</h1>
      <ul className="flex justify-around gap-4 flex-wrap my-6">
        {breed.temperament.split(", ").map((trait, i) => (
          <li
            key={trait}
            className={`${traitColors[i % traitColors.length]} rounded-full p-2 text-sm w-fit`}
          >
            {trait}
          </li>
        ))}
      </ul>

      <p className="text-gray-500 text-[13px] mt-2">Breed description</p>
      <p>{breed.description}</p>
      <p className="text-gray-500 text-[13px] mt-2">Breed History</p>
      <p>{breed.history}</p>
      <Link href="/">Back to list</Link>
    </>
  );
}
