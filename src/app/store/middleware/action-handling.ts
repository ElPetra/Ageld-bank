import toast from 'react-hot-toast';
import {
    isRejectedWithValue,
    isFulfilled,
    PayloadAction
} from '@reduxjs/toolkit';

import type { Middleware } from '@reduxjs/toolkit';

interface Payload {
    data: string;
    status: number;
}

const isPayload = (arg: unknown): arg is Payload => {
    if (typeof arg !== 'object' || arg === null) {
        return false;
    }
    return 'data' in arg && 'status' in arg;
};

const isActionType = (action: PayloadAction, startsWith: string[]): boolean => {
    for (let str in startsWith) {
        if (action.type.startsWith(str)) {
            return true;
        }
    }
    return false;
};

export const actionHandling: Middleware = () => next => action => {
    if (
        isActionType(action as PayloadAction, [
            'profileApi/',
            'settingsApi/executeMutation/'
        ])
    ) {
        if (isRejectedWithValue(action) && isPayload(action.payload)) {
            toast.error('Ошибка');
        }
        if (
            isFulfilled(action) &&
            action.payload &&
            typeof action.payload === 'string'
        ) {
            toast.success('Успех');
        }
    }
    return next(action);
};
