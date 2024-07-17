import { useCallback, useEffect, useState } from 'react';

import { Preloader } from 'src/shared/ui';

import { BankObjectMap } from './bank-object-map';
import { MapCityQuestionModal } from './map-city-question-modal';
import { MapChangeCityModal } from './map-change-city-modal';

export const ATMsBranchesPage = () => {
    const [city, setCity] = useState<string>('');
    const [location, setLocation] = useState<{
        lat: number,
        lon: number
    }>({ lat: 55.755864, lon: 37.617698 });
    const [changeCityModalVisible, setChangeCityModalVisible] =
        useState<boolean>(false);

    const getGeolocation = useCallback(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ lat: latitude, lon: longitude });
                    getCity(latitude, longitude);
                },
                () => {
                    getCity(location.lat, location.lon);
                }
            );
        } else {
            getCity(location.lat, location.lon);
        }
    }, [location.lat, location.lon]);

    useEffect(() => {
        getGeolocation();
    }, [getGeolocation]);

    const getCity = (latitude: number, longitude: number): void => {
        const ymaps = window.ymaps;
        ymaps.ready().then(() => {
            ymaps
                .geocode([latitude, longitude], { kind: 'locality' })
                .then(result => {
                    const firstGeoObject = result.geoObjects.get(0);
                    const obj = firstGeoObject.properties.get('name', {});
                    const city = typeof obj === 'object' ? obj.toString() : obj;
                    setCity(city);
                });
        });
    };

    return !city ? (
        <Preloader />
    ) : (
        <>
            <BankObjectMap
                city={city}
                location={location}
                getGeolocation={getGeolocation}
                setChangeVisible={setChangeCityModalVisible}
            />
            <MapCityQuestionModal
                city={city}
                setChangeVisible={setChangeCityModalVisible}
            />
            <MapChangeCityModal
                city={city}
                setCity={setCity}
                getCity={getCity}
                visible={changeCityModalVisible}
                setVisible={setChangeCityModalVisible}
                setLocation={setLocation}
            />
        </>
    );
};
