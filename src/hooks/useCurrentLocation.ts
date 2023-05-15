import { useGeolocated } from 'react-geolocated';

export const useCurrentLocation = () => {
  const { coords, getPosition, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false
      },
      userDecisionTimeout: 5000,
      watchLocationPermissionChange: true
    });

  return {
    longitude: coords?.longitude,
    latitude: coords?.latitude
  };
};
