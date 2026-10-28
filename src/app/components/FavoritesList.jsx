import BreedCardImage from "@/app/components/BreedCardImage";

export default function FavoritesList({ breeds: favorites }) {
  const valid = favorites.filter((fav) => fav.image?.url);

  return (
    <ul className="grid grid-cols-2 gap-4">
      {valid.map((fav) => {
        const breedInfo = fav.image.breeds?.[0];

        return (
          <li className="" key={fav.id}>
            <BreedCardImage
              breed={{
                id: breedInfo?.id ?? fav.image.id,
                name: breedInfo?.name ?? "Unknown breed",
                image: fav.image,
              }}
            />
            <p>{breedInfo?.name ?? "Unknown breed"}</p>
          </li>
        );
      })}
    </ul>
  );
}

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import BreedCardImage from "@/app/components/BreedCardImage";

// export default function FavoritesList({ breeds }) {
// const [favoriteIds, setFavoriteIds] = useState(null); // null = not loaded yet

// useEffect(() => {
//   try {
//     const stored = JSON.parse(localStorage.getItem("favorites"));
//     setFavoriteIds(Array.isArray(stored) ? stored.map(String) : []);
//   } catch {
//     setFavoriteIds([]);
//   }
// }, []);

// if (favoriteIds === null) return null;

// const favoriteBreeds = breeds.filter((b) =>
//   favoriteIds.includes(String(b.id)),
// );

// if (favoriteBreeds.length === 0) {
//   return <p>No favorites yet. Tap the star on a breed to add one.</p>;
// }

//   return (
//     <ul className="grid grid-cols-2 gap-4">
//       {breeds.map((breed) => (
//         <li key={breed.id}>
//           <BreedCardImage breed={breed.image.breeds[0]} />
//           <p>{breed.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }
