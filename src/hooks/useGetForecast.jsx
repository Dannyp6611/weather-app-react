import { useState, useEffect } from 'react';

const useGetForecast = () => {
  const [weatherData, setWeatherData] = useState(
    localStorage.getItem('weatherData')
      ? JSON.parse(localStorage.getItem('weatherData'))
      : {
          name: '',
          isDayTime: null,
          weatherCondition: '',
          weatherIcon: null,
          temperature: null,
        }
  );

  const [showCard, setShowCard] = useState(weatherData.name);

  useEffect(() => {
    if (weatherData.name) {
      setShowCard(true);
    }
  }, [weatherData.name]);

  const getWeatherData = async (cityData) => {
    const { Key } = cityData;

    const response = await fetch(
      `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=ODd7w819augbgLxVRUK42iw9Tu2FNIga`
    );
    const data = await response.json();

    return data[0];
  };

  const getCityData = async (city) => {
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=ODd7w819augbgLxVRUK42iw9Tu2FNIga&q=${city}`
    );
    const data = await response.json();

    return data[0];
  };

  const onFormSubmit = async (cityTerm) => {
    const cityData = await getCityData(cityTerm);
    const weatherData = await getWeatherData(cityData);

    localStorage.setItem(
      'weatherData',
      JSON.stringify({
        name: cityData.EnglishName,
        isDayTime: weatherData.IsDayTime,
        weatherCondition: weatherData.WeatherText,
        weatherIcon: weatherData.WeatherIcon,
        temperature: weatherData.Temperature.Metric.Value,
      })
    );

    setWeatherData({
      name: cityData.EnglishName,
      isDayTime: weatherData.IsDayTime,
      weatherCondition: weatherData.WeatherText,
      weatherIcon: weatherData.WeatherIcon,
      temperature: weatherData.Temperature.Metric.Value,
    });
  };

  return { weatherData, onFormSubmit, showCard };
};

export default useGetForecast;
