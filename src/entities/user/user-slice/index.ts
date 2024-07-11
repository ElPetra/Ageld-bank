import { createSlice } from '@reduxjs/toolkit';

import { AuthStatus } from 'src/shared/model/user';

export interface UserState {
    authStatus: AuthStatus;
}

export const initialState: UserState = {
    authStatus: AuthStatus.Loading
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignedIn(state) {
            state.authStatus = AuthStatus.SignedIn;
        },
        userSignedOut(state) {
            state.authStatus = AuthStatus.SignedOut;
        }
    }
});

export const { userSignedIn, userSignedOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
