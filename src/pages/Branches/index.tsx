import React, { useState } from 'react';
import { Modal } from '../../components';
import { Button, Input } from '../../UIComponents';

const Branches = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <h1>React Modal Misoli</h1>
            <button onClick={openModal}>Modalni ochish</button>
            <Modal isOpen={isModalOpen} onClose={closeModal} >

                <Button >Hello</Button>
                <button onClick={closeModal}>Yopish</button>

            </Modal>
        </div>
    );
};

export default Branches;
