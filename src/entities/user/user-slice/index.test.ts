import {
    userReducer,
    userSignedIn,
    initialState,
    userSignedOut
} from './index';

describe('userSlice Init', () => {
    test('Init', () => {
        const userSliceInit = userReducer(initialState, { type: 'unknown' });
        expect(userSliceInit).toBe(initialState);
    });
});

describe('userSlice SignIn', () => {
    test('SignIn', () => {
        const afterSignInReducerOperation = userReducer(
            initialState,
            userSignedIn()
        );
        expect(afterSignInReducerOperation).toStrictEqual({
            authStatus: 'SignedIn'
        });
    });
});

describe('userSlice SignOut', () => {
    test('SignOut', () => {
        const afterSignOutReducerOperations = userReducer(
            initialState,
            userSignedOut()
        );
        expect(afterSignOutReducerOperations).toStrictEqual({
            authStatus: 'SignedOut'
        });
    });
});
