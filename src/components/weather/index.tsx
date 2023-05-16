// hooks
import { useEffect, useState } from 'react';

// components
import WeatherDetails from './components/Details';

// utils
import axios from 'axios';

// custom hooks
import { toast } from 'react-toastify';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (location: string) => {
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
        )
        .then((response: any) => {
          setWeatherData(response?.data);
        })
        .catch(() => {
          toast.error('Invalid location');
          setWeatherData(null);
        });
    } catch (error) {
      toast.error('Invalid location');
    }
  };

  useEffect(() => {
    const getCurrentLocation = async () => {
      await axios.get('https://ipapi.co/json/').then((response: any) => {
        const city = response.data.city;
        setLocation(city);
        getWeatherData(city);
      });
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
        <div className="bg-black max-width w-1/3 p-10 bg-opacity-20 rounded-[48px]">
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
              className="bg-[#6531BD] p-2 mt-4 md:mt-0 rounded-full"
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
