import React from 'react';
import Card from '../../../components/Card';
import cardsData from '../../../data/cards';

import styles from './MainPage.module.scss';

class MainPage extends React.PureComponent {
  render() {
    const cards = cardsData.map((card) => (
      <Card
        key={card.id}
        imgSrc={card.imgSrc}
        price={card.price}
        description={card.description}
        title={card.title}
      />
    ));

    return <main className={styles.main}>{cards}</main>;
  }
}

export default MainPage;
