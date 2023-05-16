// hooks
import { useQuery } from '@tanstack/react-query';

// utils
import apiRequest from '../../../../utils/apiRequest';

type Props = {
  lat: number | undefined;
  lon: number | undefined;
};

export const useDefaultWeatherRequest = ({ lat, lon }: Props) => {
  const { data: weatherData, isLoading } = useQuery(
    ['default-weather'],
    () =>
      apiRequest({
        params: `lat=${lat}&lon=${lon}&units=metric`
      }),
    {
      enabled: !!lat && !!lon
    }
  );

  return {
    weatherInfo: weatherData?.data || {},
    isLoading
  };
};
