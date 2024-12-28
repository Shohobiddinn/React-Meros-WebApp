import { useEffect, useState } from 'react';
import { BranchItem, Modal } from '../../components';
import { Button } from '../../UIComponents';
import { getBranches } from "../../servise";
import { Get } from '../../@types/default';
import { Branches } from '../../@types/branchTypes';
const BranchesPage = () => {
    // Modal function
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const [branches, setBranches] = useState<Get<Branches[]> | null>(null);
    const fetchBranches = async () => {
        const response: Get<Branches[]> = await getBranches();
        setBranches(response);
    };
    useEffect(() => {
        fetchBranches();
    }, []);


    console.log(branches);

    return (
        <div>
            <BranchItem />
            <button onClick={openModal}>Modalni ochish</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Button>Hello</Button>
                <button onClick={closeModal}>Yopish</button>
            </Modal>
        </div>
    );
};

export default BranchesPage;
