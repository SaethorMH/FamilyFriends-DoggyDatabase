"use client";

import { useEffect, useState } from "react";
import BreedCardImage from "@/app/components/BreedCardImage";

export default function FavoritesList({ breeds }) {
  const [favoriteSlugs, setFavoriteSlugs] = useState(null); // null = not loaded yet

  useEffect(() => {
    try {
      setFavoriteSlugs(JSON.parse(localStorage.getItem("favorites")) ?? []);
    } catch {
      setFavoriteSlugs([]);
    }
  }, []);

  // Avoid flashing "no favorites" before localStorage has been read
  if (favoriteSlugs === null) return null;

  const favoriteBreeds = breeds.filter((b) => favoriteSlugs.includes(b.slug));

  if (favoriteBreeds.length === 0) {
    return <p>No favorites yet. Tap the star on a breed to add one.</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-4">
      {favoriteBreeds.map((breed) => (
        <li key={breed.slug}>
          <BreedCardImage breed={breed} />
          <p>{breed.name}</p>
        </li>
      ))}
    </ul>
  );
}
