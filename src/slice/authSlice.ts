import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState, User } from '../@types/authTypes'
const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<User>) {
            state.isAuthenticated = true
            state.user = action.payload
        },

    },
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer