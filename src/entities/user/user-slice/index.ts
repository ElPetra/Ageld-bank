import { createSlice } from '@reduxjs/toolkit';

type User = {
    phone: string,
    accessToken: string,
    refreshToken: string,
    isLoading: boolean
};

const initialState: User = {
    phone: '',
    accessToken: '',
    refreshToken: '',
    isLoading: true
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.phone = action.payload.phone;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.isLoading = false;
        },
        removeUser(state) {
            state.phone = '';
            state.accessToken = '';
            state.refreshToken = '';
            state.isLoading = false;
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
