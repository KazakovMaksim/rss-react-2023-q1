import React from 'react';

import { ProductCard } from 'types';
import Button from 'components/Button';
import classNames from 'classnames';
import styles from './Card.module.scss';

export type CardProps = {
  isModalOpened?: boolean;
  product: ProductCard;
  onClick?: (id: number) => void;
};

const Card = ({ product, onClick, isModalOpened }: CardProps) => {
  const { imgSrc, title, description, price, category, rating, id } = product;

  return (
    <div className={styles.card}>
      <div>
        <img src={imgSrc} alt={title} />
      </div>
      <h2 className={styles.card_title}>{title}</h2>
      <h3
        className={classNames(styles.card_subtitle, {
          [styles.card_subtitle__nonactive]: !isModalOpened,
        })}
      >
        {description}
      </h3>
      <p>{`price: $${price}`}</p>
      {!isModalOpened && (
        <Button
          onClick={() => {
            if (onClick) onClick(id);
          }}
        >
          Show more
        </Button>
      )}
      {isModalOpened && <p>{`category: ${category}`}</p>}
      {isModalOpened && <p>{`rating: ${rating}`}</p>}
    </div>
  );
};

export default Card;
