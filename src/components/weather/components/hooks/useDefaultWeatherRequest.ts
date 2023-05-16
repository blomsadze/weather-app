// hooks
import { useQuery } from '@tanstack/react-query';

// utils
import apiRequest from '../../../../utils/apiRequest';
import { toast } from 'react-toastify';

type Props = {
  city?: string;
};

export const useWeatherRequest = ({ city }: Props) => {
  const {
    data: weatherData,
    isLoading,
    isSuccess
  } = useQuery(
    [city],
    () =>
      apiRequest({
        params: `q=${city}&units=metric`
      }),
    {
      enabled: !!city,
      onError: (error: any) => {
        toast.error(error.response?.data?.message);
      }
    }
  );

  return {
    weatherInfo: weatherData?.data || {},
    isLoading,
    isSuccess
  };
};
