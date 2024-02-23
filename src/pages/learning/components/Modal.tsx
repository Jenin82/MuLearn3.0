import React from 'react'
import styles from './Modal.module.css'

type Props = {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
}
const Modal = ({ isOpen, closeModal, children }: Props) => {
    if (!isOpen) {
        return null;
    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {children}
                <button onClick={closeModal}>Done</button>
            </div>
        </div>
    )
}

export default Modal