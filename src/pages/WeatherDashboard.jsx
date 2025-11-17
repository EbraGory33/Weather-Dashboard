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
import { searchLocation } from "../components/common";
// import { LayoutGrid } from "../components/common"; (later development)

function WeatherDashboard() {
  const { selectedLocation } = useWeather();
  return (
    <>
      <Header />
      {selectedLocation ? (
        <>
          <Header />
          <HourlyForecast />
          <TenDayForecast />
        </>
      ) : (
        <searchLocation />
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
