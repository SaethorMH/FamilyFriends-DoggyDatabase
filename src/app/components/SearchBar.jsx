import Form from "next/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ defaultValue = "" }) => {
  return (
    <Form action="/" className="h-13 flex gap-4 mb-(--s-spacing)">
      <button
        type="submit"
        className="text-white text-2xl w-13 bg-accent rounded-full"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        type="text"
        name="q"
        defaultValue={defaultValue}
        className="rounded-full w-[80%] border border-gray-500 indent-(--s-spacing)"
        placeholder="search breeds"
      />
    </Form>
  );
};

export default SearchBar;
