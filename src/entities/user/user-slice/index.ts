import { createSlice } from '@reduxjs/toolkit';

import { AuthStatus } from 'src/shared/model';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    accessToken: string;
    authStatus: AuthStatus;
}

const initialState: UserState = {
    accessToken: '',
    authStatus: AuthStatus.Loading
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSignedIn(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
            state.authStatus = AuthStatus.SignedIn;
        },
        userSignedOut(state) {
            state.accessToken = initialState.accessToken;
            state.authStatus = AuthStatus.SignedOut;
        }
    }
});

export const { userSignedIn, userSignedOut } = userSlice.actions;

export const userReducer = userSlice.reducer;
