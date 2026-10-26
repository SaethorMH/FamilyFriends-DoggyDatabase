"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BreedCardImage from "@/app/components/BreedCardImage";

export default function FavoritesList({ breeds }) {
  const [favoriteIds, setFavoriteIds] = useState(null); // null = not loaded yet

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("favorites"));
      setFavoriteIds(Array.isArray(stored) ? stored.map(String) : []);
    } catch {
      setFavoriteIds([]);
    }
  }, []);

  if (favoriteIds === null) return null;

  const favoriteBreeds = breeds.filter((b) =>
    favoriteIds.includes(String(b.id)),
  );

  if (favoriteBreeds.length === 0) {
    return <p>No favorites yet. Tap the star on a breed to add one.</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-4">
      {favoriteBreeds.map((breed) => (
        <li key={breed.id}>
          <BreedCardImage breed={breed} />
          <p>{breed.name}</p>
        </li>
      ))}
    </ul>
  );
}
