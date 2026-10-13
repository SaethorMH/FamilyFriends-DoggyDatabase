import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { breeds } from "@/app/data/breeds";

export default async function DetailView({ params }) {
  const { slug } = await params;
  const breed = breeds.find((b) => b.slug === slug);

  if (!breed) notFound();

  return (
    <>
      <Image src="/dummydog.jpg" width={360} height={360} alt="" />
      <h1>{breed.name}</h1>

      <p>Breed description</p>
      <p>{breed.descriptionLong}</p>
      <p>Breed History</p>
      <p>{breed.history}</p>
      <Link href="/">Back to list</Link>
    </>
  );
}
