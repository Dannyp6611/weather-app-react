import Card from './components/Card';
import LocationForm from './components/LocationForm';

// hook
import useGetForecast from './hooks/useGetForecast';

export default function App() {
  const { weatherData, showCard, onFormSubmit } = useGetForecast();

  return (
    <div className="w-full h-screen bg-gray-200 p-4">
      <div className="container max-w-[400px] text-center">
        <h1 className="text-4xl text-gray-500 tracking-wider mb-4">
          React Weather
        </h1>
        <LocationForm onFormSubmit={onFormSubmit} />

        {/* Card */}
        {showCard && (
          <Card
            cityName={weatherData.name}
            isDayTime={weatherData.isDayTime}
            weatherCondition={weatherData.weatherCondition}
            temperature={weatherData.temperature}
            weatherIcon={weatherData.weatherIcon}
          />
        )}
      </div>
    </div>
  );
}
