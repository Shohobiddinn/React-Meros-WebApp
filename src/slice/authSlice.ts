import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState, AutharizationUser } from '../@types/authTypes'
import { setItem } from '../helpers/localeStorage'
const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<AutharizationUser>) {
            state.isAuthenticated = true;
            setItem('user', action.payload)
            state.user = action.payload
        },

    },
})

export const { loginUser } = authSlice.actions

export default authSlice.reducer