import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className="h-13 flex gap-4 mb-(--s-spacing)">
      <button className="text-white text-2xl w-13 bg-accent rounded-full">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        className="rounded-full w-[80%] border border-gray-500 indent-(--s-spacing)"
        placeholder="search breeds"
      />
    </div>
  );
};

export default SearchBar;
