import { isRejectedWithValue } from '@reduxjs/toolkit';

import type { Middleware } from '@reduxjs/toolkit';

interface Payload {
    data: string;
    originalStatus: number;
}

const isPayload = (arg: unknown): arg is Payload => {
    if (typeof arg !== 'object' || arg === null) {
        return false;
    }
    if ('data' in arg && 'originalStatus' in arg) {
        return true;
    }
    return false;
};

export const errorHandling: Middleware = () => next => action => {
    if (isRejectedWithValue(action) && isPayload(action.payload)) {
        console.log(action.payload.data);
        console.log(action.payload.originalStatus);
    }
    return next(action);
};
