import i18n from 'src/shared/model/i18n';

import type { BankObject } from 'src/shared/model';

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

export const getStatus = (schedule: string): string => {
    const getStart = (time: string): string => {
        return time.split('-')[0];
    };
    const getEnd = (time: string): string => {
        return time.split('-')[1];
    };
    const getHour = (time: string): number => {
        return Number(time.split(':')[0]);
    };
    const getStatusByTime = (time: string, time2: string): string => {
        if (time === 'выходной') {
            return i18n.t('Закрыто до ') + getStart(time2);
        } else {
            const d = new Date();
            const dayNumber = d.getDay();
            const hours = d.getHours();
            const status =
                hours >= getHour(getStart(time)) &&
                hours < getHour(getEnd(time));
            const end =
                dayNumber === 5 || dayNumber === 6
                    ? getStart(time2)
                    : getStart(time);
            return status
                ? i18n.t('Открыто до ') + getEnd(time)
                : i18n.t('Закрыто до ') + end;
        }
    };
    schedule = schedule.toLowerCase();
    if (
        schedule.includes('без выходных') &&
        schedule.includes('круглосуточно')
    ) {
        return i18n.t('Открыто круглосуточно');
    } else {
        const d = new Date();
        const dayNumber = d.getDay();
        const scheduleArray = schedule.split(' ');
        if (dayNumber === 1) {
            return getStatusByTime(scheduleArray[8], scheduleArray[3]);
        } else if (dayNumber > 0 && dayNumber < 6) {
            return getStatusByTime(scheduleArray[3], scheduleArray[5]);
        } else {
            return getStatusByTime(scheduleArray[5], scheduleArray[3]);
        }
    }
};

export const getSchedule = (schedule: string): string => {
    if (
        schedule.includes('Без выходных') ||
        schedule.includes('Seven days a week')
    ) {
        return i18n.t(schedule);
    } else {
        const start =
            schedule.indexOf('Cуббота') !== -1
                ? schedule.indexOf('Cуббота')
                : schedule.indexOf('Saturday');
        const end =
            schedule.indexOf('Воскресенье') !== -1
                ? schedule.indexOf('Воскресенье')
                : schedule.indexOf('Sunday');

        return (
            schedule.slice(0, start) +
            '\n' +
            schedule.slice(start, end) +
            '\n' +
            schedule.slice(end, schedule.length)
        );
    }
};
