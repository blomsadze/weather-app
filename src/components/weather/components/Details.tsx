// types
import { FC } from 'react';
import { FooterDataTypes } from './types';

// components
import FooterItem from './Item';
// utils
import dayjs from 'dayjs';

// assets
import {
  EyeIcon,
  HumidityIcon,
  TemperatureIcon,
  WindIcon
} from '../../../assets/icons';

type WeatherDetailsProps = {
  data: any;
};

const WeatherDetails: FC<WeatherDetailsProps> = ({ data }) => {
  const footerData: FooterDataTypes = {
    left: [
      {
        title: 'Visibility',
        icon: EyeIcon,
        value: data?.visibility ? data.visibility / 1000 : 0,
        unit: 'Km'
      },
      {
        title: 'Humidity',
        icon: HumidityIcon,
        value: data?.main?.humidity || 0,
        unit: '%'
      }
    ],
    right: [
      {
        title: 'Fells Like',
        icon: TemperatureIcon,
        value: data?.main?.feels_like || 0,
        unit: '°C'
      },
      {
        title: 'Wind Speed',
        icon: WindIcon,
        value: data?.wind?.speed || 0,
        unit: 'KM'
      }
    ]
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-black w-1/3 p-10 bg-opacity-20 rounded-[48px]">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">City: {data?.name}</h1>
          <p>{dayjs().format('DD-MM-YYYY')}</p>
        </div>
        <div className="mb-5">
          <p className="text-[9rem] leading-[9.375rem]">
            {(data?.main?.temp && data?.main?.temp.toFixed(0)) || 0}
            <sup
              style={{
                verticalAlign: 'super'
              }}
              className="text-5xl font-light opacity-85"
            >
              °C
            </sup>
          </p>

          <span>Weather Condition: {data?.weather?.[0]?.description}</span>
        </div>

        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start">
            {footerData.left.map((item, index) => (
              <FooterItem key={index} item={item} />
            ))}
          </div>
          <div className="flex flex-col items-start">
            {footerData.right.map((item, index) => (
              <FooterItem key={index} item={item} />
            ))}
          </div>
        </div>

        {/* <h1>Sea Level: {data?.main?.pressure}</h1> */}
      </div>
    </div>
  );
};

export default WeatherDetails;
