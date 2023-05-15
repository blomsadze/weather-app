import { useGeolocated } from 'react-geolocated';

export const useCurrentLocation = () => {
  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000,
    watchLocationPermissionChange: true
  });

  return {
    longitude: coords?.longitude,
    latitude: coords?.latitude,
    isGeolocationEnabled
  };
};
