import React from 'react';

import styles from './Card.module.scss';

export type CardProps = {
  imgSrc: string;
  title: string;
  price: number;
  description: string;
  onClick?: React.MouseEventHandler;
};

class Card extends React.PureComponent<CardProps> {
  render() {
    const { imgSrc, title, description, price } = this.props;

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
  }
}

export default Card;