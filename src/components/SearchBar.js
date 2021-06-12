// Styling
import { SearchBarStyled } from "../styles";

export const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a trip name or a city ..."
    />
  );
};


export default SearchBar;
