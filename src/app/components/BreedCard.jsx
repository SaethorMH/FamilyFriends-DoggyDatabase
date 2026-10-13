import BreedCardImage from "./BreedCardImage";

const breed = {
  name: "Placeholder dog",
  from: "Paris, Texas",
  description: "This is a very peceulear dog it looks crased",
};
const BreedCard = (breed = {}) => {
  return (
    <div className="flex flex-col max-w-40 rounded-2xl  shadow">
      <BreedCardImage breed={breed} isFavorite="false" />
      <h3>{breed.name}</h3>
      <p>{breed.from}</p>
    </div>
  );
};

export default BreedCard;
