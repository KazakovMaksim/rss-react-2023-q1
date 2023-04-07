import { useEffect, useState } from 'react';
import Card from 'components/Card';
import axios from 'axios';
import { ProductCard } from 'types';
import { baseURL } from 'constants/index';
import Modal from './Modal';
import Search from './Search';
import styles from './MainPage.module.scss';

const MainPage = () => {
  const [productCards, setProductCards] = useState<ProductCard[] | []>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [cardIdForModal, setCardIdForModal] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const result = await axios({
        method: 'get',
        url: baseURL,
      });
      setProductCards(result.data);
    };

    fetch();
  }, []);

  const cardClickHandle = (id: number) => {
    setCardIdForModal(id.toString());
    setIsModalOpened(!isModalOpened);
  };

  return (
    <main className={styles.main}>
      {isModalOpened && (
        <Modal onClick={() => setIsModalOpened(!isModalOpened)} id={cardIdForModal} />
      )}
      <Search />
      {productCards.length > 0 &&
        productCards.map((product) => (
          <Card key={product.id} product={product} onClick={(id) => cardClickHandle(id)} />
        ))}
    </main>
  );
};

export default MainPage;
