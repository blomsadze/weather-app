import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCurrentLocation = () => {
  const { data: locationData } = useQuery(['location'], () => {
    return axios.get('https://ipapi.co/json/');
  });

  console.log('locationData', locationData);

  return {
    locationData
  };
};
