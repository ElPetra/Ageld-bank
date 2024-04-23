import type { BankObject } from '../model';

export const getAddress = (obj: BankObject): string => {
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
            return 'Закрыто до ' + getStart(time2);
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
            return status ? 'Открыто до ' + getEnd(time) : 'Закрыто до ' + end;
        }
    };
    schedule = schedule.toLowerCase();
    if (
        schedule.includes('без выходных') &&
        schedule.includes('круглосуточно')
    ) {
        return 'Открыто круглосуточно';
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
    if (schedule.includes('Без выходных')) {
        return schedule;
    } else {
        const start = schedule.indexOf('Cуббота');
        const end = schedule.indexOf('Воскресенье');
        return (
            schedule.slice(0, start - 1) +
            '\n' +
            schedule.slice(start, end - 1) +
            '\n' +
            schedule.slice(end, schedule.length)
        );
    }
};
