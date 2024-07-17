import { useTranslation } from 'react-i18next';

import { Card, Icon, Overlay, Text } from 'src/shared/ui';
import { SearchForm } from 'src/features/forms';

import type { Dispatch, SetStateAction } from 'react';
import type { Coordinates } from 'src/shared/model';

import './styles.scss';

const popularCity: Array<{ coordinates: Coordinates, name: string }> = [
    {
        coordinates: { lat: 56.838011, lon: 60.597474 },
        name: 'Екатеринбург'
    },
    {
        coordinates: { lat: 59.938784, lon: 30.314997 },
        name: 'Санкт-Петербург'
    },
    {
        coordinates: { lat: 55.755864, lon: 37.617698 },
        name: 'Москва'
    },
    {
        coordinates: { lat: 55.030204, lon: 82.92043 },
        name: 'Новосибирск'
    },
    {
        coordinates: { lat: 47.222109, lon: 39.718813 },
        name: 'Ростов-на-Дону'
    }
];

interface Props {
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
    getCity: (latitude: number, longitude: number) => void;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    setLocation: Dispatch<SetStateAction<{ lat: number, lon: number }>>;
}

export function MapChangeCityModal({
    city,
    setCity,
    getCity,
    visible,
    setVisible,
    setLocation
}: Props) {
    const { t } = useTranslation();

    const handleSubmit = (data: string) => {
        const ymaps = window.ymaps;
        ymaps.ready().then(() => {
            ymaps.geocode(data, { kind: 'district' }).then(result => {
                const firstGeoObject = result.geoObjects.get(0);
                const obj = firstGeoObject.properties.get('name', {});
                const city = typeof obj === 'object' ? obj.toString() : obj;
                // eslint-disable-next-line
                // @ts-ignore
                const coordinates = firstGeoObject.geometry?.getCoordinates();
                setLocation({ lat: coordinates[0], lon: coordinates[1] });
                setCity(city);
            });
        });
    };

    return (
        <Overlay visible={visible}>
            <div className='map-change-city-modal'>
                <Card
                    color='secondary'
                    direction='column'
                    borderRadius='extra-large'
                    gap='medium'
                    padding='medium'
                >
                    <div className='map-change-city-modal__main'>
                        <Text weight='medium' display='flex'>
                            {t('Вы здесь:')}&nbsp;
                            <Text weight='medium' color='action'>
                                {t(city)}
                            </Text>
                        </Text>
                        <button
                            type='button'
                            className='map-change-city-modal__main__close'
                            onClick={() => setVisible(false)}
                        >
                            <Icon icon='close' />
                        </button>
                    </div>
                    <SearchForm
                        key={visible ? 1 : 0}
                        label={t('Поиск')}
                        size='medium'
                        onSubmit={handleSubmit}
                    />
                    <div className='map-change-city-modal__popular'>
                        <Text weight='medium' size='m'>
                            {t('Популярные города')}
                        </Text>
                        <div className='map-change-city-modal__popular__options'>
                            {popularCity.map(el => (
                                <button
                                    type='button'
                                    onClick={() => {
                                        setLocation(el.coordinates);
                                        getCity(
                                            el.coordinates.lat,
                                            el.coordinates.lon
                                        );
                                        setVisible(false);
                                    }}
                                    key={el.name}
                                >
                                    <Text weight='medium'>{t(el.name)}</Text>
                                </button>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </Overlay>
    );
}
