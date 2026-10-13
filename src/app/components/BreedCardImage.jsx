"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as notFavorite } from "@fortawesome/free-regular-svg-icons";
import { faStar as Favorite } from "@fortawesome/free-solid-svg-icons";

const BreedCardImage = ({ initialFavorite = false, breed = {} }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  return (
    <div className="grid  w-full grid-rows-[114px]">
      <Image
        src="/dummydog.jpg"
        width={160}
        height={114}
        className="h-full w-full object-cover col-start-1 row-start-1 rounded-2xl"
        alt={breed.name + " image"}
      />
      {/* <input type="checkmark" className="col-start-1 row-start-1" /> */}
      <button
        type="button"
        onClick={() => setIsFavorite((prev) => !prev)}
        className="col-start-1 row-start-1 justify-self-end self-start m-2 size-6 grid place-items-center rounded-full bg-[#FEFEFE]/25 text-white"
      >
        <FontAwesomeIcon icon={isFavorite ? Favorite : notFavorite} />
      </button>
    </div>
  );
};

export default BreedCardImage;
