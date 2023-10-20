import "./App.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopButtons from "./components/TopButtons";
import formatForecastWeather from "./components/services/hourly_daily";
import getFormattedWeatherData from "./components/services/WeatherService";
import { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Datainputs from "./components/Datainputs";
import TimeAndLocation from "./components/TimenAndLocation";
import TemperatureAndDetails from './components/TemperatureAndDetails';

function App() {
  const [query, setQuery] = useState({ q: "Chennai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [weather2, setWeather2] = useState(null);

   useEffect(() => {
    const fetchWeather = async () => {
    const message = query.q ? query.q : "current location.";
    toast.info("Fetching weather for " + message);
    await getFormattedWeatherData({ ...query, units }).then(async (data) => {
      toast.success(
        `Successfully fetched weather for ${data.name}, ${data.country}.`
      );
      setWeather(data);
      const data2 = await formatForecastWeather(data.lat, data.lon);
      console.log(data2);
      setWeather2(data2);
    });
  };

  // useEffect(() => {
    fetchWeather();
    // fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, units]);
  console.log(weather, "weather")
  // console.log(weather2.daily);

  const { daily, hourly } = { ...weather2 };
  console.log(hourly);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600";
    const threshold = units === "metric" ? 27 : 60;
    if (weather.temp <= threshold) return "from-cyan-600";

    return "from-orange-500";
  };

  return (
    <>
       <div
        className={`bg-cover bg-center-center bg-no-repeat grid p-16 main-div ${formatBackground()} main-card`}
      >
        <div
          className={
            "weather-card grid grid-cols-1 max-w-100 mx-auto mt-auto mb-auto py-6 px-32 bg-white bg-opacity-5 backdrop-blur-lg rounded drop-shadow-lg"
          }
          style={{ borderRadius: "50px" }}
          id="form"
        >
          <div>
          <TopButtons setQuery={setQuery} />
          <Datainputs setQuery={setQuery} units={units} setUnits={setUnits} />
          </div>
          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
              <Forecast title="Hourly Forecast" items={hourly} />
              <Forecast title="Daily Forecast" items={daily} />
            </div>
          )}
          </div>
        <ToastContainer autoClose={1000} theme="colored" newestOnTop={true} />
      </div>
    </>
  );
}

export default App;
