import {
    userReducer,
    userSignedIn,
    initialState,
    userSignedOut
} from './index';

describe('Tests for userSlice Init', () => {
    test('userSliceInit', () => {
        const userSliceInit = userReducer(initialState, { type: 'unknown' });
        expect(userSliceInit).toBe(initialState);
    });
});

describe('Tests for userSlice SignIn', () => {
    test('userSliceSignIn', () => {
        const afterSignInReducerOperation = userReducer(
            initialState,
            userSignedIn()
        );
        expect(afterSignInReducerOperation).toStrictEqual({
            authStatus: 'SignedIn'
        });
    });
});

describe('Tests for userSlice SignOut', () => {
    test('userSliceSignIn', () => {
        const afterSignOutReducerOperations = userReducer(
            initialState,
            userSignedOut()
        );
        expect(afterSignOutReducerOperations).toStrictEqual({
            authStatus: 'SignedOut'
        });
    });
});
