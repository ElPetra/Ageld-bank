import toast from 'react-hot-toast';
import { isRejectedWithValue, isFulfilled } from '@reduxjs/toolkit';

import type { Middleware } from '@reduxjs/toolkit';

interface Payload {
    data: string;
    status: number;
}

const isPayload = (arg: unknown): arg is Payload => {
    if (typeof arg !== 'object' || arg === null) {
        return false;
    }
    if ('data' in arg && 'status' in arg) {
        return true;
    }
    return false;
};

export const actionHandling: Middleware = () => next => action => {
    if (isRejectedWithValue(action) && isPayload(action.payload)) {
        toast.error(action.payload.data);
    }
    if (
        isFulfilled(action) &&
        action.payload &&
        typeof action.payload === 'string'
    ) {
        toast.success(action.payload);
    }
    return next(action);
};
