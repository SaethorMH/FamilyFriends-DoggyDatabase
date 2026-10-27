"use server";
export const toggleFav = async (id) => {
  const response = await fetch("https://api.thedogapi.com/v1/favourites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
    body: JSON.stringify({
      image_id: id,
    }),
  });
  console.log("response: ", response);
  console.log("id: ", id);
};
