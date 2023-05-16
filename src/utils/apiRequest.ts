// utils
import axios from 'axios';

export default function apiRequest({ params }: any) {
  const axiosParams: any = {
    method: 'GET',
    url: `${process.env.REACT_APP_API_SERVER_URL}?${params}&appid=${process.env.REACT_APP_API_KEY}`
  };

  axiosParams.params = {
    ...params
  };

  return axios(axiosParams).then((response) => {
    return response;
  });
}
