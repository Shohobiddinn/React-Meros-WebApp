import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }: any) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">


                {children}

            </div>
        </div>
    );
};

export default Modal;
