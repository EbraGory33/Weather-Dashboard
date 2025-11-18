import { useEffect } from "react";
import { useWeather } from "../../../context/WeatherContext";

export default function Dropdown() {
  const { searchResults, setSelectedLocation, fetchLocationSuggestions } =
    useWeather();
  //   const { setSelectedLocation, fetchLocationSuggestions } = useWeather();
  //   const searchResults = [
  //     {
  //       name: "New York",
  //       admin1: "NY",
  //       country: "USA",
  //       id: 1,
  //     },
  //     {
  //       name: "New York",
  //       admin1: "NY",
  //       country: "USA",
  //       id: 2,
  //     },
  //   ];
  useEffect(() => {
    console.log({ searchResults });
  }, [searchResults]);

  return (
    <>
      {searchResults && searchResults.length > 0 && (
        <div className="search-results">
          <p>Search Results</p>
          <ul>
            {searchResults.map((location) => (
              <li
                key={location.id}
                onClick={() => setSelectedLocation(location)}
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
