import { createContext, useContext, useState, useCallback } from "react";
import { fetchLocationSuggestions } from "../services/weatherApi";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  /** ---------------------------
   * STATE
   ----------------------------- */
  const [query, setQuery] = useState(""); // user typing in search bar
  const [searchResults, setSearchResults] = useState([]); // suggestions
  const [selectedLocation, setSelectedLocation] = useState(null); // { name, lat, lon }

  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [daily, setDaily] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  /** ---------------------------
   * SELECT LOCATION + FETCH WEATHER
   ----------------------------- */
  const fetchWeather = useCallback(async (lat, lon) => {
    try {
      setLoading(true);
      setError(null);

      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code,is_day,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,wind_speed_10m,uv_index,visibility&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,uv_index_max,sunrise,sunset&forecast_days=7&timezone=auto&temperature_unit=fahrenheit&wind_speed_unit=mph`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.error) throw new Error(data.reason);

      setCurrent(data.current);
      setHourly(data.hourly);
      setDaily(data.daily);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch weather data.");
    } finally {
      setLoading(false);
    }
  }, []);

  /** ---------------------------
   * When user selects a city from suggestions
   ----------------------------- */
  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    fetchWeather(location.lat, location.lon);
    setSearchResults([]); // close suggestions dropdown
    setQuery(location.name); // fill input with selected location
  };

  /** ---------------------------
   * PROVIDER VALUE (global data)
   ----------------------------- */
  const value = {
    query,
    setQuery,

    setSearchResults,
    searchResults,

    // searchLocations,
    fetchLocationSuggestions,

    setSelectedLocation,
    selectedLocation,
    handleSelectLocation,

    current,
    hourly,
    daily,

    loading,
    error,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
