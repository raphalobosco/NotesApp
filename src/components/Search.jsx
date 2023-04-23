import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <AiOutlineSearch className="searchIcon" size="1.3rem" />
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => handleSearch(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default Search;
