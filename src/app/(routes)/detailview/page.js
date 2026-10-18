import { breeds } from "@/app/data/breeds";
import FavoritesList from "@/app/components/FavoritesList";

const DetailView = () => {
  return (
    <>
      <h1>Favorites</h1>
      <FavoritesList breeds={breeds} />
    </>
  );
};

export default DetailView;
