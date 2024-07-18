import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    GeolocationControl,
    Map,
    Placemark,
    RulerControl,
    YMaps,
    ZoomControl
} from '@pbe/react-yandex-maps';

import { Card, MapDotSVG, Text } from 'src/shared/ui';
import { MapFilter } from 'src/features/filters';
import { SearchForm } from 'src/features/forms';

import { toPrepositional } from '../../lib';
import { data } from '../../model';

import { BankObjectCard } from './bank-object-card';
import { BankObjectInfoMenu } from './bank-object-info-menu';

import type { Dispatch, SetStateAction } from 'react';
import type { BankObject, Coordinates } from 'src/shared/model';

import './styles.scss';

interface Props {
    city: string;
    location: Coordinates;
    getGeolocation: () => void;
    setChangeVisible: Dispatch<SetStateAction<boolean>>;
}

export function BankObjectMap({
    city,
    location,
    getGeolocation,
    setChangeVisible
}: Props) {
    const { t } = useTranslation();
    const [bankObjects, setBankObjects] = useState<BankObject[]>(data);
    const [visible, setVisible] = useState<boolean>(false);
    const [current, setCurrent] = useState<BankObject | undefined>();

    return (
        <>
            <YMaps>
                <Map
                    state={{
                        center: [location.lat, location.lon],
                        zoom: 15
                    }}
                    modules={[
                        'geoObject.addon.balloon',
                        'geoObject.addon.hint'
                    ]}
                    className='map'
                >
                    <div className='map__forward-container'>
                        <div className='map__forward-container__left'>
                            <MapFilter
                                bankData={data}
                                setBankObjects={setBankObjects}
                            />
                        </div>
                        <div className='map__forward-container__right'>
                            <div className='map__forward-container__col'>
                                <Card
                                    color='secondary'
                                    direction='column'
                                    borderRadius='extra-large'
                                    padding='small-medium'
                                >
                                    <Text weight='bold' size='m' display='flex'>
                                        {t('Отделения в')}&nbsp;
                                        <button
                                            onClick={() =>
                                                setChangeVisible(true)
                                            }
                                        >
                                            <Text
                                                weight='bold'
                                                size='m'
                                                color='action'
                                            >
                                                {toPrepositional(city)}
                                            </Text>
                                        </button>
                                    </Text>
                                    <SearchForm
                                        label={t(
                                            'Поиск по адресу или названию'
                                        )}
                                        size='medium'
                                    />
                                </Card>
                                {bankObjects.map(el => (
                                    <BankObjectCard
                                        key={el.objectNumber}
                                        bankObject={el}
                                        setVisible={setVisible}
                                        setCurrent={setCurrent}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        {bankObjects.map(el => (
                            <Placemark
                                key={el.objectNumber}
                                geometry={[
                                    Number(el.coordinates.lat),
                                    Number(el.coordinates.lon)
                                ]}
                                onClick={() => {
                                    setVisible(true);
                                    setCurrent(el);
                                }}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: MapDotSVG
                                }}
                            />
                        ))}
                        <GeolocationControl
                            options={{
                                float: 'left'
                            }}
                            onClick={getGeolocation}
                        />
                        <RulerControl
                            options={{
                                position: { right: 10, bottom: 30 }
                            }}
                        />
                        <ZoomControl
                            options={{
                                size: 'large',
                                position: { right: 10, bottom: 30 },
                                zoomDuration: 10
                            }}
                        />
                    </div>
                </Map>
            </YMaps>
            <BankObjectInfoMenu
                visible={visible}
                setVisible={setVisible}
                bankObject={current}
            />
        </>
    );
}
