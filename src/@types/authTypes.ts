export interface AuthState {
    isAuthenticated: boolean
    user?: User | null
}
export interface User {
    email: string
    password: string
}