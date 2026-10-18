import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/app/components/FavoriteButton";

const BreedCardImage = ({ breed = {} }) => {
  return (
    <div className="grid w-full grid-rows-[114px]">
      <Link
        href={`/detailview/${breed.slug}`}
        className="col-start-1 row-start-1"
      >
        <Image
          src="/dummydog.jpg"
          width={160}
          height={114}
          className="h-full w-full object-cover rounded-2xl"
          alt={breed.name + " image"}
        />
      </Link>
      <FavoriteButton
        slug={breed.slug}
        className="col-start-1 row-start-1 justify-self-end self-start m-2 size-6"
      />
    </div>
  );
};

export default BreedCardImage;
