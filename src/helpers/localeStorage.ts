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

