import { createSlice } from '@reduxjs/toolkit';

type User = {
    phone: string | null,
    accessToken: string | null,
    refreshToken: string | null
};

const initialState: User = {
    phone: null,
    accessToken: null,
    refreshToken: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.phone = action.payload.token;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        removeUser(state) {
            state.phone = null;
            state.accessToken = null;
            state.refreshToken = null;
        }
    }
});
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
