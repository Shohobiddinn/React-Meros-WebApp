import { AutharizationUser } from "../@types/authTypes";

export const getItem = (key: string) => {
    try {
        const item = localStorage.getItem(key);
        if (item === null) {
            return null;
        }
        return JSON.parse(item);
    } catch (error) {
        console.log('Error getting data');
        return null;
    }
}
export const setItem = (key: string, data: AutharizationUser) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log('Error setting data');
    }
}
