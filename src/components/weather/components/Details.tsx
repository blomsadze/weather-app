// types
import { FC } from 'react';

// utils
import dayjs from 'dayjs';

type WeatherDetailsProps = {
  data: any;
};

const WeatherDetails: FC<WeatherDetailsProps> = ({ data }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-black w-1/2 p-10 bg-opacity-20 rounded-[48px]">
        <h1 className="text-2xl font-semibold">City: {data?.name}</h1>
        <p>{dayjs().format('DD-MM-YYYY')}</p>
        <p> {data?.main?.temp}</p>
        <h1>Weather Condition: {data?.weather?.[0]?.description}</h1>

        <h1>Feels Like Temperature: {data?.main?.feels_like}</h1>
        <h1>Humidity: {data?.main?.humidity}</h1>
        <h1>Sea Level: {data?.main?.pressure}</h1>
        <h1>Wind Speed: {data?.wind?.speed}</h1>
        <h1>Visibility: {data?.visibility}</h1>
      </div>
    </div>
  );
};

export default WeatherDetails;
