import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimenAndLocation from './components/TimenAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';


function App() {
  return (
    <div className="mx-auto m-10 p-4 max-w-screen-md mt-4 py-6 px-35 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gary-400">
      <TopButtons />
      <Inputs />

      <TimenAndLocation /> 
      <TemperatureAndDetails />
      <Forecast title= "Hourly forecast" />
      <Forecast title= "Daily forecast" />
    </div>
  );
}

export default App;
