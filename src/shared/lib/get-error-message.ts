import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

export const getErrorMessage = (
    error: FetchBaseQueryError | SerializedError | undefined
): string =>
    (error && 'data' in error && typeof error.data == 'string' && error.data) ||
    '';

export const getFieldErrorMessage = (
    message:
        | string
        | FieldError
        | Merge<FieldError, FieldErrorsImpl<any>>
        | undefined
): string => (typeof message === 'string' && message) || '';
