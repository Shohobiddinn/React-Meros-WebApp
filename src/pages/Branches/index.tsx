import { useEffect, useState } from 'react';
import { BranchItem, Modal, Pagination } from '../../components';
import { Button } from '../../UIComponents';
import { getBranches } from "../../servise";
import { Get } from '../../@types/default';
import { Branches } from '../../@types/branchTypes';

const BranchesPage = () => {
    // Modal function
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // `branches` ning tipi: `Get<Branches[]>` yoki `null`
    const [branches, setBranches] = useState<Get<Branches[]> | null>(null);

    // Pagination state
    const [pagination, setPagination] = useState({
        current_page: 1,
        pages: 1,
        limit: 25,
        data: [] as Branches[], // data maydoni qo'shildi
    });

    // Branchlarni olish uchun function
    const fetchBranches = async () => {
        const response: Get<Branches[]> = await getBranches();
        setBranches(response);

        // Paginationni yangilash: current_page, pages, limit va data
        setPagination({
            current_page: response.current_page,
            pages: response.pages,
            limit: response.limit,
            data: response.data,
        });
    };

    const handlePageChange = (updatedPagination: any) => {
        setPagination(updatedPagination);
        console.log(updatedPagination);

        fetchBranches(); // Ma'lumotlarni yangilash
    };

    useEffect(() => {
        fetchBranches();
    }, [pagination.current_page, pagination.limit]);

    return (
        <div>
            {/* branches mavjud bo'lsa, ma'lumotlarni ko'rsatish */}
            {branches?.data?.map(branch => (
                <BranchItem key={branch.id} item={branch}></BranchItem>
            ))}

            {/* Pagination komponenti */}
            <Pagination paginationData={pagination} onPageChange={handlePageChange} />

            <button onClick={openModal}>Modalni ochish</button>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Button>Hello</Button>
                <button onClick={closeModal}>Yopish</button>
            </Modal>
        </div>
    );
};

export default BranchesPage;
