import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const getErrorMessage = (
    error: FetchBaseQueryError | SerializedError | undefined
): string =>
    (error && 'data' in error && typeof error.data == 'string' && error.data) ||
    '';
