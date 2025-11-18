import { useWeather } from "../../../context/WeatherContext";

export default function SearchLocation() {
  const {
    searchResults,
    setSearchResults,
    setSelectedLocation,
    fetchLocationSuggestions,
  } = useWeather();
  function setLocation(e) {
    e.preventDefault();
    console.log(e.target.value);
    const data = fetchLocationSuggestions(e.target.value).then((res) => {
      console.log(res);
      setSearchResults(res.results);
    });
    console.log(data);
    console.log(searchResults);
    // const location = e.target.location.value;
    // setSelectedLocation(location);
    // setSearchResults([]);
  }
  return (
    <div className="search-bar">
      <div className="search-icon">
        <img src="./search.svg" alt="Search Icon" height={18} width={18} />
      </div>
      <input
        className="search-field"
        type="text"
        placeholder="Search"
        onChange={setLocation}
      />
    </div>
  );
}
