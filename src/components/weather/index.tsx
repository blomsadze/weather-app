/* eslint-disable react-hooks/exhaustive-deps */
// hooks
import { useCallback, useEffect, useState } from 'react';

// components
import WeatherDetails from './components/Details';

// utils
import axios from 'axios';

// custom hooks
import { toast } from 'react-toastify';

const Weather = () => {
  const [location, setLocation] = useState<string>('');
  const [weatherData, setWeatherData] = useState({});

  const getWeatherData = useCallback(async (city: string) => {
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=337fa9caefb6f838be27f7659a0ba7f9&units=metric`
        )
        .then((response: any) => {
          setWeatherData(response?.data);
        })
        .catch(() => {
          toast.error('Invalid location');
          setWeatherData({});
        });
    } catch (error) {
      toast.error('Invalid location');
    }
  }, []);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        await axios.get('https://ipapi.co/json/').then((response) => {
          const { city } = response.data;
          setLocation(city);
          getWeatherData(city);
        });
      } catch (error) {
        toast.error('Eror getting current location');
      }
    };
    getCurrentLocation();
  }, []);

  const handleLocationChange = (event: any) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    getWeatherData(location);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-black max-width  lg:w-1/2 w-full p-10 bg-opacity-20 rounded-[48px]">
          <form
            className="mb-4 flex justify-start md:flex-row flex-col items-center"
            onSubmit={handleSubmit}
          >
            <label>
              Enter Location:
              <input
                type="text"
                className="bg-transparent mx-2 rounded-xl border-2 p-1"
                value={location}
                onChange={handleLocationChange}
              />
            </label>
            <button
              className="bg-[#6531BD] py-2 px-4 mt-4 md:mt-0 rounded-full"
              type="submit"
            >
              Get Weather
            </button>
          </form>
          <WeatherDetails data={weatherData} />
        </div>
      </div>
    </>
  );
};

export default Weather;
