import type { ScheduleData } from 'src/shared/model';

export const getTime = (time: string): number => {
    const timeArr = time.split(':');
    return Number(timeArr[0]) + Number(timeArr[1]) / 60;
};

export const isOpen = (schedule: ScheduleData): boolean => {
    const d = new Date();
    const dayNumber = d.getDay();
    const current = schedule[dayNumber - 1];

    const time = d.getHours() + d.getMinutes() / 60;

    if (typeof current !== 'string') {
        if (time >= getTime(current.open) && time <= getTime(current.close)) {
            return true;
        }
    }
    return false;
};
