import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "@/app/components/FavoriteButton";

const BreedCardImage = ({ breed = {} }) => {
  return (
    <div className="grid grid-cols-1 w-full grid-rows-[114px]">
      <Link
        href={`/detailview/${breed.id}`}
        className="col-start-1 row-start-1 block h-full w-full"
      >
        <Image
          src={breed.image.url}
          width={160}
          height={114}
          className="h-full w-full object-cover rounded-2xl col-start-1 row-start-1"
          alt={breed.name + " image"}
          // style={{ viewTransitionName: `img-${breed.id}` }}
        />
      </Link>
      <FavoriteButton
        slug={String(breed.id)}
        id={breed.image.id}
        className="col-start-1 row-start-1 justify-self-end self-start m-2 size-6"
      />
    </div>
  );
};

export default BreedCardImage;
