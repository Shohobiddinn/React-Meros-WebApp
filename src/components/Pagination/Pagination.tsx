import React, { useState, useEffect } from 'react';
import "./Pagination.css"
interface PaginationProps {
    paginationData: {
        current_page: number;
        pages: number;
        limit: number;
        data: any[];
    };
    onPageChange: (updatedPagination: any) => void;
}

const Pagination: React.FC<PaginationProps> = ({ paginationData, onPageChange }) => {
    const [pagination, setPagination] = useState(paginationData);

    useEffect(() => {
        if (paginationData) {
            setPagination(paginationData);
        }
    }, [paginationData]);

    const handlePageChange = (page: number) => {
        const updatedPagination = { ...pagination, current_page: page };
        setPagination(updatedPagination);
        onPageChange(updatedPagination);
    };

    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const updatedPagination = { ...pagination, limit: parseInt(e.target.value), current_page: 1 };
        setPagination(updatedPagination);
        onPageChange(updatedPagination);
    };

    const handleRefresh = () => {
        const updatedPagination = { ...paginationData, current_page: 1, limit: 25 };
        setPagination(updatedPagination);
        onPageChange(updatedPagination);
    };

    const handleFirstPage = () => handlePageChange(1);
    const handleLastPage = () => handlePageChange(pagination.pages);
    const handlePrevPage = () => handlePageChange(Math.max(1, pagination.current_page - 1));
    const handleNextPage = () => handlePageChange(Math.min(pagination.pages, pagination.current_page + 1));

    return (
        <div className="pagination-container">
            <button className='buttonPagination' onClick={handleRefresh}>&#x21bb;</button>
            <button className='buttonPagination' onClick={handleFirstPage} disabled={pagination.current_page === 1}>
                &#171;
            </button>
            <button className='buttonPagination' onClick={handlePrevPage} disabled={pagination.current_page === 1}>
                &#8249;
            </button>
            <select
                value={pagination.current_page}
                onChange={(e) => handlePageChange(Number(e.target.value))}
            >
                {[...Array(pagination.pages)].map((_, idx) => (
                    <option key={idx} value={idx + 1}>
                        {idx + 1}
                    </option>
                ))}
            </select>
            <button className='buttonPagination' onClick={handleNextPage} disabled={pagination.current_page === pagination.pages}>
                &#8250;
            </button>
            <button className='buttonPagination' onClick={handleLastPage} disabled={pagination.current_page === pagination.pages}>
                &#187;
            </button>
            <select value={pagination.limit} onChange={handleLimitChange}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        </div>
    );
};

export default Pagination;
