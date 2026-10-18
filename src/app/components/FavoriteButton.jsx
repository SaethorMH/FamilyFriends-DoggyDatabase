"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as notFavorite } from "@fortawesome/free-regular-svg-icons";
import { faStar as Favorite } from "@fortawesome/free-solid-svg-icons";

const STORAGE_KEY = "favorites";

function readFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export default function FavoriteButton({
  slug,
  initialFavorite = false,
  className = "",
}) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  // Read localStorage after mount (it doesn't exist on the server)
  useEffect(() => {
    if (readFavorites().includes(slug)) setIsFavorite(true);
  }, [slug]);

  function toggle() {
    const next = !isFavorite;
    const favorites = readFavorites().filter((s) => s !== slug);
    if (next) favorites.push(slug);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    setIsFavorite(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={isFavorite}
      className={`grid place-items-center rounded-full bg-[#FEFEFE]/25 text-white ${className}`}
    >
      <FontAwesomeIcon icon={isFavorite ? Favorite : notFavorite} />
    </button>
  );
}
