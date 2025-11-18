import { useWeather } from "../context/WeatherContext";
import {
  Header,
  HourlyForecast,
  TenDayForecast,
  // AirQuality, (later development)
  // Wind,
  // PrecipitationMap,
  // UVIndex,
  // Sunset,
  // FeelsLike,
  // Humidity,
  // Visibility,
  // Pressure,
  // Averages,
} from "../components/weather";
import { SearchLocation, Dropdown } from "../components/common";
// import { LayoutGrid } from "../components/common"; (later development)

function WeatherDashboard() {
  const { selectedLocation } = useWeather();
  return (
    <>
      <SearchLocation />
      <Dropdown />
      {selectedLocation ? (
        <>
          <Header />
          <HourlyForecast />
          <TenDayForecast />
        </>
      ) : (
        <></>
      )}

      {/* Work In Progress */}
      {/* 
        <Header />
        <LayoutGrid>
          <HourlyForecast />
          <TenDayForecast />
          <AirQuality />
          <PrecipitationMap />
          <Wind />
          <UVIndex />
          <Sunset />
          <FeelsLike />
          <Humidity />
          <Visibility />
          <Pressure />
          <Averages />
        </LayoutGrid> */}
    </>
  );
}

export default WeatherDashboard;
