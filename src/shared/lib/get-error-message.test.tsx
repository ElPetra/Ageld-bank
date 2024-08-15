import { getErrorMessage, getFieldErrorMessage } from './get-error-message';
interface FetchBaseQueryError {
    status: number;
    data: unknown;
    error?: string;
}
const errorNotFoundExample: FetchBaseQueryError = {
    status: 404,
    data: 'Not Found',
    error: 'Resource not found'
};
const errorOccurredExample: FetchBaseQueryError = {
    status: 300,
    data: { message: 'Error occurred' }
};

describe('getErrorMessage', () => {
    it('returns the error message when error object has a string data property', () => {
        expect(getErrorMessage(errorNotFoundExample)).toBe('Not Found');
    });

    it('returns an [object Object] when error data is not a string', () => {
        expect(getErrorMessage(errorOccurredExample)).toBe('[object Object]');
    });

    it('returns an empty string when error is undefined', () => {
        expect(getErrorMessage(undefined)).toBe('');
    });

    it('returns an empty string when error object does not contain data', () => {
        const error = {};
        expect(getErrorMessage(error)).toBe('');
    });
});
describe('getFieldErrorMessage', () => {
    it('returns the message when it is a string', () => {
        expect(getFieldErrorMessage('Validation failed')).toBe(
            'Validation failed'
        );
    });

    it('returns an empty string when message is undefined', () => {
        expect(getFieldErrorMessage(undefined)).toBe('');
    });

    it('returns an empty string when FieldError does not contain a string message', () => {
        const fieldError = { message: { type: 'required' } };
        expect(getFieldErrorMessage(fieldError)).toBe('');
    });
});
