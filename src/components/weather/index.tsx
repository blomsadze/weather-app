// components
import WeatherDetails from './components/Details';

// custom hooks
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { useDefaultWeatherRequest } from './components/hooks/useDefaultWeatherRequest';

const Weather = () => {
  const { longitude, latitude, isGeolocationEnabled } = useCurrentLocation();

  const { weatherInfo, isLoading } = useDefaultWeatherRequest({
    lat: latitude,
    lon: longitude
  });

  console.log('weatherInfo', weatherInfo);

  return (
    <>{weatherInfo && !isLoading && <WeatherDetails data={weatherInfo} />}</>
  );
};

export default Weather;
