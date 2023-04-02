import React, { useEffect } from 'react';

import styles from './Confirmation.module.scss';

type ConfirmationProps = {
  children: React.ReactNode;
  onConfirm: () => void;
};

const Confirmation = (props: ConfirmationProps) => {
  const { children, onConfirm } = props;

  useEffect(() => {
    setTimeout(() => {
      onConfirm();
    }, 1000);
  }, [onConfirm]);

  return <div className={styles.confirmation}>{children}</div>;
};

export default Confirmation;
