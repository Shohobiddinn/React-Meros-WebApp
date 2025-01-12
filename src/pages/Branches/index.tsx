import { useEffect, useState } from 'react';
import { BranchItem, Modal, Pagination } from '../../components';
import { Button } from '../../UIComponents';
import { getBranches } from "../../servise";
import { Get } from '../../@types/default';
import { Branches } from '../../@types/branchTypes';

const BranchesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [branches, setBranches] = useState<Get<Branches[]> | null>(null);

    const [pagination, setPagination] = useState({
        current_page: 1,
        pages: 1,
        limit: 25,
        data: [] as Branches[],
    });
    const fetchBranches = async (): Promise<void> => {
        let param: any = {
            current_page: pagination.current_page,
            limit: pagination.limit,

        }
        const response: Get<Branches[]> = await getBranches(param);
        setBranches(response);
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
            {branches?.data?.map(branch => (
                <BranchItem key={branch.id} item={branch}></BranchItem>
            ))}
            <Pagination paginationData={pagination} onPageChange={handlePageChange} />
            <button onClick={openModal}>Modalni ochish</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Button>Hello</Button>
                <button onClick={closeModal}>Yopish</button>
            </Modal>
        </div>
    );
};

export default BranchesPage;
