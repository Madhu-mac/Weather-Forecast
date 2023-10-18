import './App.css';
import TopButtons from './components/TopButtons';
import TimenAndLocation from './components/TimenAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import Datainputs from './components/Datainputs';
import getFormattedWeatherData from './components/services/WeatherService';


function App() {

  const fetchWeather =async () =>{
    const data = await getFormattedWeatherData({q: "london"});
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto m-10 p-4 max-w-screen-md mt-4 py-6 px-35 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gary-400">
      <TopButtons />
      <Datainputs />

      <TimenAndLocation /> 
      <TemperatureAndDetails />
      <Forecast title= "Hourly forecast" />
      <Forecast title= "Daily forecast" />
    </div>
  );
}

export default App;
