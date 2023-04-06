import React from 'react';

import { ProductCard } from 'types';
import styles from './Card.module.scss';

export type CardProps = {
  product: ProductCard;
  onClick?: React.MouseEventHandler;
};

const Card = ({ product }: CardProps) => {
  const { imgSrc, title, description, price } = product;

  return (
    <div className={styles.card}>
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <h2 className={styles.card_title}>{title}</h2>
      <h3 className={styles.card_subtitle}>{description}</h3>
      <p>{`$${price}`}</p>
    </div>
  );
};

export default Card;
