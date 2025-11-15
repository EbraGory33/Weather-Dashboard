import { createContext, useContext } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
  return (
    <WeatherContext.Provider
      value={
        {
          /* Add weather-related state and functions here */
        }
      }
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
