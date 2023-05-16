// components
import WeatherDetails from './components/Details';

// custom hooks
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { useDefaultWeatherRequest } from './components/hooks/useDefaultWeatherRequest';

const Weather = () => {
  const { longitude, latitude, isGeolocationEnabled } = useCurrentLocation();

  const { weatherInfo } = useDefaultWeatherRequest({
    lat: latitude,
    lon: longitude
  });

  return (
    <>
      <WeatherDetails data={weatherInfo} />
    </>
  );
};

export default Weather;
