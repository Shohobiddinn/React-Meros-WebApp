export interface Get<T> {
    current_page: number;
    limit: number;
    pages: number;
    data: T; 
}
