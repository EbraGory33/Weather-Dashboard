import { apiFetch } from "./api.js";

export async function fetchLocationSuggestions(name, count = 15) {
  if (!name || name.trim() === "") return [];
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=${count}`;
  try {
    const data = await apiFetch(url);
    return data;
  } catch (error) {
    console.error("Error fetching location suggestions:", error);
    return [];
  }
}

// (async () => {
const a = await apiFetch(
  "https://geocoding-api.open-meteo.com/v1/search?name=New&count=50"
);
console.log({ a });

//   //   const b = await apiFetch(
//   //     "https://api.open-meteo.com/v1/forecast?latitude=40.8448&longitude=-73.8648&current=temperature_2m,apparent_temperature,weather_code,is_day,wind_speed_10m&hourly=temperature_2m,apparent_temperature,weather_code,precipitation_probability,wind_speed_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset&forecast_days=7&timezone=auto&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch"
//   //   );

//   //   const c = await apiFetch(
//   //     "https://api.open-meteo.com/v1/forecast?latitude=40.8448&longitude=-73.8648&current=temperature_2m,apparent_temperature,weather_code,is_day,wind_speed_10m,wind_gusts_10m&timezone=auto&temperature_unit=fahrenheit&wind_speed_unit=mph"
//   //   );

//   //   const d = await apiFetch(
//   //     "https://api.open-meteo.com/v1/forecast?latitude=40.8448&longitude=-73.8648&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,wind_speed_10m,uv_index,visibility&timezone=auto&temperature_unit=fahrenheit&wind_speed_unit=mph"
//   //   );

//   //   const e = await apiFetch(
//   //     "https://api.open-meteo.com/v1/forecast?latitude=40.8448&longitude=-73.8648&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max,uv_index_max,sunrise,sunset&forecast_days=10&timezone=auto&temperature_unit=fahrenheit"
//   //   );

//   //   console.log({ b, c, d, e });
// })();
