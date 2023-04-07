import { createPortal } from 'react-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ProductCard } from 'types';
import { baseURL } from 'constants/index';
import Card from 'components/Card';
import styles from './Modal.module.scss';

export type ModalProps = {
  id: string;
  onClick?: () => void;
};

const modalRoot = document.getElementById('modal') as HTMLElement;

const Modal = ({ onClick, id }: ModalProps) => {
  const [cardForModal, setCardForModal] = useState<ProductCard | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: 'get',
        url: `${baseURL}/${id}`,
      });
      setCardForModal(result.data);
    };

    fetch();
  }, [id]);

  return createPortal(
    <div role="presentation" className={styles.modal_overlay} onClick={onClick}>
      <div
        role="presentation"
        className={styles.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <span role="presentation" className={styles.modal_cross} onClick={onClick}>
          x
        </span>
        {cardForModal && <Card product={cardForModal} isModalOpened />}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
