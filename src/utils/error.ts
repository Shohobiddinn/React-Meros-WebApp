import toast from './alert';
export default function error(e: any) {
    const status = e?.status;
    const detail = e?.response?.data?.detail;
    switch (status) {
        case 400:
            toast('error', detail)

        case 401:
            // throw new Error('Unauthorized');
        case 403:
            // throw new Error('Forbidden');
        case 404:
            // throw new Error('Not Found');
        case 500:
            toast('error', 'Internet bilan aloqa yo\'q')

        default:
    }

    // throw new Error('An error occurred')
}