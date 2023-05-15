// hooks
import { useEffect, useState } from 'react';

// components
import WeatherDetails from './components/Details';

// custom hooks
import { useCurrentLocation } from '../../hooks/useCurrentLocation';

// utils
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState<any>({});

  const { longitude, latitude } = useCurrentLocation();

  const fetchData = async () => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=337fa9caefb6f838be27f7659a0ba7f9`
      )
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      });
  };

  useEffect(() => {
    if (longitude && latitude) {
      fetchData();
    }
  }, [longitude, latitude]);

  return <>{data && <WeatherDetails data={data} />}</>;
};

export default Weather;
