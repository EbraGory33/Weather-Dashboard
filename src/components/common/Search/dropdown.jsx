import { useWeather } from "../../../context/WeatherContext";

export default function Dropdown() {
  const { searchResults, setSelectedLocation, setSearchResults } = useWeather();

  return (
    <>
      {searchResults && searchResults.length > 0 && (
        <div className="search-results">
          <p>Search Results</p>
          <ul>
            {searchResults.map((location) => (
              <li
                key={location.id}
                onClick={() => {
                  setSelectedLocation(location), setSearchResults([]);
                }}
              >
                <p>
                  {location.name}, {location.admin1}, {location.country}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
