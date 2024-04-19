import {
    GeolocationControl,
    Map,
    Placemark,
    RulerControl,
    YMaps,
    ZoomControl
} from '@pbe/react-yandex-maps';

import { Card, Icon, Text } from 'src/shared/ui';
import { MapFilter } from 'src/features/filters';
import { SearchForm } from 'src/features/forms';

import './styles.scss';
import { useState } from 'react';

const objectTypeName = {
    ATM: 'Банкомат',
    kiosk: 'Инфокиоск',
    head: 'Главный офис',
    branch: 'Отделение банка',
    exchange: 'Обменный пункт'
};

type objectType = keyof typeof objectTypeName;

interface BankObject {
    objectNumber: number;
    latitude: number;
    longitude: number;
    region?: string;
    location: string;
    street?: string;
    microdistrict?: string;
    buildingNumberHouse?: string;
    houseNumber: string;
    objectTypeName: objectType;
    schedule: string;
}

const data: BankObject[] = [
    {
        objectNumber: 1,
        latitude: 59.95354024191497,
        longitude: 30.309087827396112,
        region: 'Пыталовский',
        location: 'Пыталово',
        street: 'Пыталово',
        microdistrict: 'Новый город',
        buildingNumberHouse: '2',
        houseNumber: '3B',
        objectTypeName: 'branch',
        schedule:
            'Понедельник - Пятница: 9:00-19:00 ' +
            'Cуббота: 10:00-15:00. Воскресенье - выходной'
    },
    {
        objectNumber: 2,
        latitude: 59.953343,
        longitude: 30.308006,
        region: 'Пыталовский',
        location: 'Пыталово',
        street: 'Пыталово',
        buildingNumberHouse: '2',
        houseNumber: '4B',
        objectTypeName: 'branch',
        schedule:
            'Понедельник - Пятница: 9:00-14:00 Cуббота: 10:00-14:00. Воскресенье - выходной'
    },
    {
        objectNumber: 3,
        latitude: 59.953343,
        longitude: 30.309006,
        location: 'Пыталово',
        street: 'Пыталово',
        houseNumber: '4B',
        objectTypeName: 'ATM',
        schedule: 'Без выходных, круглосуточно'
    }
];

const getAddress = (obj: BankObject): string => {
    const getString = (value: string | undefined): string => {
        return value ? value + ', ' : '';
    };
    const region = getString(obj.region);
    const street = getString(obj.street);
    const microdistrict = getString(obj.microdistrict);
    const buildingNumberHouse = getString(obj.buildingNumberHouse)
        ? 'д. ' + getString(obj.buildingNumberHouse)
        : '';

    return (
        obj.location +
        ', ' +
        region +
        street +
        microdistrict +
        buildingNumberHouse +
        'кв. ' +
        obj.houseNumber
    );
};

const isOpen = (schedule: string): boolean => {
    const isOpenByTime = (time: string): boolean => {
        if (time === 'выходной') {
            return false;
        } else {
            const times = time.split('-');
            const d = new Date();
            const hours = d.getHours();
            const start = Number(times[0].split(':')[0]);
            const end = Number(times[1].split(':')[0]);
            return hours >= start && hours < end;
        }
    };
    schedule = schedule.toLowerCase();
    if (
        schedule.includes('без выходных') &&
        schedule.includes('круглосуточно')
    ) {
        return true;
    } else {
        const d = new Date();
        const dayNumber = d.getDay();
        const scheduleArray = schedule.split(' ');
        if (dayNumber === 1) {
            return isOpenByTime(scheduleArray[8]);
        } else if (dayNumber > 0 && dayNumber < 6) {
            return isOpenByTime(scheduleArray[3]);
        } else {
            return isOpenByTime(scheduleArray[5]);
        }
    }
};

export const ATMsBranchesPage = () => {
    const [selectedLocation, setSelectedLocation] = useState<number[]>();
    return (
        <YMaps>
            <Map
                defaultState={{
                    center: [59.95354024191497, 30.309087827396112],
                    zoom: 15,
                    controls: []
                }}
                modules={[
                    'geoObject.addon.balloon',
                    'geoObject.addon.hint',
                    'geoObject.addon.editor'
                ]}
                className='map'
                instanceRef={inst => console.log(inst)}
            >
                <div className='map__forward-container'>
                    <div className='map__forward-container__left'>
                        <MapFilter />
                    </div>
                    <div className='map__forward-container__right'>
                        <div className='map__forward-container__col'>
                            <Card>
                                <Text weight='bold' size='m' display='flex'>
                                    Объекты в&nbsp;
                                    <Text weight='bold' size='m' color='action'>
                                        Москве
                                    </Text>
                                </Text>
                                <div className='map__search'>
                                    <SearchForm
                                        label='Поиск по адресу или названию'
                                        size='extra-small'
                                    />
                                </div>
                            </Card>
                            {data.map(el => (
                                <Card
                                    key={el.objectNumber}
                                    status={
                                        `${el.latitude},${el.longitude}` ==
                                        selectedLocation?.toString()
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <div className='bank-object__name'>
                                        <Icon icon='building' />
                                        <Text weight='bold' size='m'>
                                            {objectTypeName[el.objectTypeName] +
                                                ' №' +
                                                el.objectNumber}
                                        </Text>
                                    </div>
                                    <div>{getAddress(el)}</div>
                                    <div>{el.schedule}</div>
                                    <div>
                                        {isOpen(el.schedule)
                                            ? 'Открыто'
                                            : 'Закрыто'}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='some'>
                    {data.map(el => (
                        <Placemark
                            key={el.objectNumber}
                            geometry={[el.latitude, el.longitude]}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref:
                                    'src/shared/ui/icon/assets/icons/map-dot.svg'
                            }}
                            properties={{
                                hintContent: `<div>
                                            ${objectTypeName[el.objectTypeName]} № ${el.objectNumber}
                                        </div>`,
                                balloonContentHeader: `<div style="text-decoration: underline;">${objectTypeName[el.objectTypeName]} № ${el.objectNumber}</div>`,
                                balloonContent: `<div style="max-width: 250px;"><div>${getAddress(el)}</div>Время работы:<div>${el.schedule}</div></div>`,
                                balloonContentFooter: `<div>
                                        ${
                                            isOpen(el.schedule)
                                                ? 'Открыто'
                                                : 'Закрыто'
                                        }
                                    </div>`
                            }}
                            instanceRef={inst => {
                                inst?.events.add('balloonclose', () => {
                                    setSelectedLocation([]);
                                });
                                inst?.events.add('balloonopen', () => {
                                    setSelectedLocation([
                                        el.latitude,
                                        el.longitude
                                    ]);
                                });
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
    );
};
