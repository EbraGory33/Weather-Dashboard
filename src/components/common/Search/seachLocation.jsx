import { useWeather } from "../../../context/WeatherContext";

export default function SearchLocation() {
  const { setSearchResults, fetchLocationSuggestions } = useWeather();

  function setLocation(e) {
    e.preventDefault();
    if (e.target.value.trim() === "") return;
    fetchLocationSuggestions(e.target.value).then((res) => {
      setSearchResults(res.results);
    });
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
