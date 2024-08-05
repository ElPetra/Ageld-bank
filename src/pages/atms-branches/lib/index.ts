import i18n from 'src/shared/model/i18n';

import { getTime } from 'src/shared/lib';

import type { BankObject, ScheduleData, ScheduleDay } from 'src/shared/model';

export const getAddress = (obj: BankObject): string => {
    const getString = (value: string | undefined): string => {
        return value ? value + ', ' : '';
    };
    const region = getString(i18n.t(obj.region as string));
    const street = getString(i18n.t(obj.street as string));
    const microdistrict = getString(i18n.t(obj.microdistrict as string));
    const buildingNumberHouse = obj.buildingNumberHouse
        ? getString(i18n.t(obj.buildingNumberHouse))
        : '';

    return (
        i18n.t(obj.location) +
        ', ' +
        region +
        street +
        microdistrict +
        buildingNumberHouse +
        i18n.t(obj.houseNumber)
    );
};

export const getStatus = (schedule: ScheduleData): string => {
    const d = new Date();
    const dayNumber = d.getDay();
    const current = schedule[dayNumber - 1];
    const next = schedule[dayNumber % 7];

    const time = d.getHours() + d.getMinutes() / 60;

    if (typeof current !== 'string') {
        if (time >= getTime(current.open) && time <= getTime(current.close)) {
            return current.close;
        } else if (time <= getTime(current.open)) {
            return current.open;
        } else {
            if (typeof next === 'string') {
                return '00:00';
            } else {
                return next.open;
            }
        }
    } else {
        if (current === 'weekend') {
            if (typeof next === 'string') {
                return '00:00';
            } else {
                return next.open;
            }
        } else {
            return '00:00';
        }
    }
};

export const getSchedule = (schedule: ScheduleDay | string): string => {
    return typeof schedule === 'string'
        ? schedule === 'weekend'
            ? 'выходной'
            : schedule
        : schedule.open + '-' + schedule.close;
};

export const toPrepositional = (city: string): string => {
    const exceptions: Record<string, string> = {
        'Нижний Новгород': 'Нижнем Новгороде',
        'Ростов-на-Дону': 'Ростове-на-Дону',
        'Набережные Челны': 'Набережных Челнах',
        Ставрополь: 'Ставрополе',
        Ярославь: 'Ярославе',
        Орёл: 'Орле'
    };

    if (exceptions[city]) {
        return exceptions[city];
    }
    const cities = city.split(' ');
    if (cities.length > 1) {
        if (cities[1] === 'область') {
            return `${cities[0].slice(0, -2)}ой области`;
        }
    }

    if (city.endsWith('а') || city.endsWith('я') || city.endsWith('ь')) {
        return `${city.slice(0, -1)}е`;
    }

    if (city.endsWith('ый') || city.endsWith('ий')) {
        return `${city.slice(0, -2)}ом`;
    }

    if (city.endsWith('ь')) {
        return `${city.slice(0, -1)}и`;
    }

    return `${city}е`;
};
