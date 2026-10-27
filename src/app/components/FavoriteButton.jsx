"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as notFavorite } from "@fortawesome/free-regular-svg-icons";
import { faStar as Favorite } from "@fortawesome/free-solid-svg-icons";
import { toggleFav } from "../actions/actions";

export default function FavoriteButton({
  slug,
  initialFavorite = false,
  className = "",
  id,
}) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  return (
    <FontAwesomeIcon
      onClick={() => {
        const next = !isFavorite;
        setIsFavorite(next);
        toggleFav(id);
      }}
      icon={isFavorite ? Favorite : notFavorite}
      className={`cursor-pointer rounded-full bg-[#FEFEFE]/25 text-white p-2 ${className}`}
    />
  );
}

// const STORAGE_KEY = "favorites";

// function readFavorites() {
//   try {
//     return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
//   } catch {
//     return [];
//   }
// }

// export default function FavoriteButton({
//   slug,
//   initialFavorite = false,
//   className = "",
// }) {
//   const [isFavorite, setIsFavorite] = useState(initialFavorite);

//   useEffect(() => {
//     if (readFavorites().includes(slug)) setIsFavorite(true);
//   }, [slug]);

//   function toggle() {
//     const next = !isFavorite;
//     const favorites = readFavorites().filter((s) => s !== slug);
//     if (next) favorites.push(slug);

//     localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
//     setIsFavorite(next);
//     console.log(favorites);
//   }

//   return (
//     <button
//       type="button"
//       onClick={toggle}
//       className={`grid place-items-center rounded-full bg-[#FEFEFE]/25 text-white ${className}`}
//     >
//       <FontAwesomeIcon icon={isFavorite ? Favorite : notFavorite} />
//     </button>
//   );
// }
