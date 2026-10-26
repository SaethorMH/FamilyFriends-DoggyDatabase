import BreedCardImage from "./BreedCardImage";
import Link from "next/link";

const BreedCard = ({ breed = {} }) => {
  return (
    <div className="flex flex-col w-40 rounded-2xl gap-2 shadow shrink ">
      <BreedCardImage breed={breed} isFavorite="false" />
      <Link href={`/detailview/${breed.id}`}>
        <div className="flex flex-col gap-1 px-2.75 mb-3.5">
          <h3 className="font-bold text-[15px] ">
            {breed.name ?? "placeholderName"}
          </h3>
          <p className="font-medium text-gray-500 text-[12px]/[0.6lh] wrap-break-word w-[11ch] ">
            {breed.origin ?? "placeholderFrom"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BreedCard;
