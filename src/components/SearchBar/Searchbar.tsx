import { useState, FC, ChangeEvent, FormEvent } from "react";
import { BsSearch } from "react-icons/bs";
import "../../styles/styles.css";

interface SearchbarProps {
  onFormSubmit: (searchQuery: string) => void;
}

const Searchbar: FC<SearchbarProps> = ({ onFormSubmit }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (searchQuery.trim() === "") {
      return;
    }
    onFormSubmit(searchQuery.trim());
    setSearchQuery("");
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <BsSearch />
        </button>

        <input
          className="SearchForm-input"
          type="text"
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
        />
      </form>
    </header>
  );
};

export default Searchbar;
