import { useEffect, useState } from 'react';
import Card from 'components/Card';
import { ProductCard } from 'types';
import { getProductsWithSearchParams } from 'api';
import Modal from './Modal';
import Search from './Search';
import styles from './MainPage.module.scss';

export enum InfoMessages {
  Empty = 'There are no any cards according to this searching value!',
  GettingCardErr = 'There are some errors during getting cards!',
}

const MainPage = () => {
  const searchValueInLS = localStorage.getItem('inputValueLS');
  const [productCards, setProductCards] = useState<ProductCard[] | []>([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [cardIdForModal, setCardIdForModal] = useState('');
  const [searchValue, setSearchValue] = useState(searchValueInLS || '');
  const [apiReqErrorName, setApiReqErrorName] = useState('');

  useEffect(() => {
    getProductsWithSearchParams(searchValue).then((res) => {
      if (typeof res !== 'string') {
        setProductCards(res.data);
      } else {
        setApiReqErrorName(res);
      }
    });
  }, [searchValue]);

  const cardClickHandle = (id: number) => {
    setCardIdForModal(id.toString());
    setIsModalOpened(!isModalOpened);
  };

  const infoBlock = apiReqErrorName ? InfoMessages.GettingCardErr : InfoMessages.Empty;

  return (
    <main className={styles.main}>
      {isModalOpened && (
        <Modal onClick={() => setIsModalOpened(!isModalOpened)} id={cardIdForModal} />
      )}
      <Search onSearchChange={setSearchValue} />
      {productCards.length > 0 &&
        productCards.map((product) => (
          <Card key={product.id} product={product} onClick={(id) => cardClickHandle(id)} />
        ))}
      {productCards.length === 0 && <div className={styles.main_info}>{infoBlock}</div>}
    </main>
  );
};

export default MainPage;
