import { useState } from 'react';
import {
    GeolocationControl,
    Map,
    Placemark,
    RulerControl,
    YMaps,
    ZoomControl
} from '@pbe/react-yandex-maps';

import { Card, MapDotSVG } from 'src/shared/ui';
import { MapFilter } from 'src/features/filters';
import { SearchForm } from 'src/features/forms';

import { data } from '../model';

import { BankObjectCard } from './bank-object-card';
import { BankObjectInfoMenu } from './bank-object-info-menu';

import type { BankObject } from 'src/shared/model';

import './styles.scss';

export const ATMsBranchesPage = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [current, setCurrent] = useState<BankObject | undefined>();

    return (
        <>
            <YMaps>
                <Map
                    defaultState={{
                        center: [59.95354024191497, 30.309087827396112],
                        zoom: 15,
                        controls: []
                    }}
                    modules={[
                        'geoObject.addon.balloon',
                        'geoObject.addon.hint'
                    ]}
                    className='map'
                >
                    <div className='map__forward-container'>
                        <div className='map__forward-container__left'>
                            <MapFilter />
                        </div>
                        <div className='map__forward-container__right'>
                            <div className='map__forward-container__col'>
                                <Card
                                    color='secondary'
                                    direction='column'
                                    borderRadius='extra-large'
                                    padding='small-medium'
                                >
                                    <div className='map__search'>
                                        <SearchForm
                                            label='Поиск по адресу или названию'
                                            size='medium'
                                        />
                                    </div>
                                </Card>
                                {data.map(el => (
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
                    <div className='some'>
                        {data.map(el => (
                            <Placemark
                                key={el.objectNumber}
                                geometry={[el.latitude, el.longitude]}
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
                current={current}
            />
        </>
    );
};

// <Text weight='bold' size='m' display='flex'>
//     Объекты в&nbsp;
//     <Text
//         weight='bold'
//         size='m'
//         color='action'
//     >
//         Москве
//     </Text>
// </Text>
