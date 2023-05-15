// types
import { FC } from 'react';

type WeatherDetailsProps = {
  data: any;
};

const WeatherDetails: FC<WeatherDetailsProps> = ({ data }) => {
  return (
    <>
      <>
        <h1>City: {data?.name}</h1>
        <h1>Weather Condition: {data?.weather?.[0]?.description}</h1>
        <h1>Temperature: {data?.main?.temp}</h1>
        <h1>Feels Like Temperature: {data?.main?.feels_like}</h1>
        <h1>Humidity: {data?.main?.humidity}</h1>
        <h1>Sea Level: {data?.main?.pressure}</h1>
        <h1>Wind Speed: {data?.wind?.speed}</h1>
        <h1>Visibility: {data?.visibility}</h1>
      </>
    </>
  );
};

export default WeatherDetails;
