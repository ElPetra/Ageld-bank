import { createSlice } from '@reduxjs/toolkit';
import { removeAuthData } from 'src/shared/api/services/localStorageApi';

type User = {
    phone: string | null,
    accessToken: string | null,
    refreshToken: string | null,
    isLoading: boolean
};

const initialState: User = {
    phone: null,
    accessToken: null,
    refreshToken: null,
    isLoading: true
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.phone = action.payload.token;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isLoading = false;
        },
        removeUser(state) {
            state.phone = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isLoading = false;
            removeAuthData();
        }
    }
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
