export interface AuthState {
    isAuthenticated: boolean
    user?: AutharizationUser | null
}
export interface User {
    username: string
    password: string
}
export interface AuthAction {
    username: string
    password: string | number
}
export interface AutharizationUser {
    access_token: string,
    id: number
}