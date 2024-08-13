import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export const getErrorMessage = (
    error: FetchBaseQueryError | SerializedError | undefined
): string =>
    (error && 'data' in error && ((typeof error.data == 'string' && error.data) || String(error.data))) ||
    '';

export const isErrorStatusUnauthorized = (
    error: FetchBaseQueryError | SerializedError | undefined
): boolean =>
    !!(error && 'originalStatus' in error && error.originalStatus === 401);

export const getFieldErrorMessage = (
    message:
        | string
        | FieldError
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        | Merge<FieldError, FieldErrorsImpl<any>>
        | undefined
): string => (typeof message === 'string' && message) || '';
