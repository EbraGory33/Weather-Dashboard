import { WeatherProvider } from "../context/WeatherContext";
import {
  Header,
  HourlyForecast,
  TenDayForecast,
  AirQuality,
  Wind,
  PrecipitationMap,
  UVIndex,
  Sunset,
  FeelsLike,
  Humidity,
  Visibility,
  Pressure,
  Averages,
} from "../components/weather";
import { LayoutGrid } from "../components/common";

function WeatherDashboard() {
  return (
    <>
      <WeatherProvider>
        <div>
          <Header />
          <HourlyForecast />

          <LayoutGrid>
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
          </LayoutGrid>
        </div>
      </WeatherProvider>
    </>
  );
}

export default WeatherDashboard;
