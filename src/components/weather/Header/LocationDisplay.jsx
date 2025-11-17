export default function LocationDisplay() {
  // Delete
  const Location = "New York";
  const Temperature = 75;
  const Condition = "Sunny";
  const High = 80;
  const Low = 65;
  //
  return (
    <div className="header">
      <p className="weather-location">{Location}</p>

      <p className="weather-temp">
        {/* {Temperature}° */}
        {Temperature}
      </p>
      <p className="weather-condition">{Condition}</p>
      <p className="weather-hilo">
        H:{High}° L:{Low}°
      </p>
    </div>
  );
}
