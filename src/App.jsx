import { WeatherProvider } from "./context/WeatherContext.jsx";
import WeatherDashboard from "./pages/WeatherDashboard.jsx";

function App() {
  return (
    <>
      <WeatherProvider>
        <WeatherDashboard />
      </WeatherProvider>
    </>
  );
}

export default App;
