"use server";

const BASE = "https://api.thedogapi.com/v1/favourites";
const auth = { "x-api-key": process.env.API_KEY };

export const readFavorites = async () => {
  const res = await fetch(BASE, { headers: auth, cache: "no-store" });
  if (!res.ok) throw new Error(`readFavorites failed: ${res.status}`);
  return res.json();
};

export const toggleFav = async (imageId) => {
  const favorites = await readFavorites();
  const existing = favorites.find((fav) => fav.image_id === imageId);

  const res = existing
    ? await fetch(`${BASE}/${existing.id}`, {
        method: "DELETE",
        headers: auth, // no Content-Type: there's no body
      })
    : await fetch(BASE, {
        method: "POST",
        headers: { ...auth, "Content-Type": "application/json" },
        body: JSON.stringify({ image_id: imageId }),
      });

  if (!res.ok) {
    throw new Error(`toggleFav failed: ${res.status} ${await res.text()}`);
  }
  return !existing;
};
