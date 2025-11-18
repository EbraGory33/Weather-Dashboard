import { useWeather } from "../../../context/WeatherContext";
import { WMO_CODES } from "../../../services/wmo";

export default function LocationDisplay() {
  const { selectedLocation, current } = useWeather();

  return (
    <>
      {selectedLocation && current && (
        <div className="header">
          <p className="weather-location">{selectedLocation.name}</p>

          <p className="weather-temp">
            {Math.round(current.current.temperature_2m)}
          </p>
          <p className="weather-condition">
            {WMO_CODES[current.current.weather_code]}
          </p>
          <p className="weather-hilo">
            H:{Math.round(current.daily.temperature_2m_max[0])}° L:
            {Math.round(current.daily.temperature_2m_min[0])}°
          </p>
        </div>
      )}
    </>
  );
}
