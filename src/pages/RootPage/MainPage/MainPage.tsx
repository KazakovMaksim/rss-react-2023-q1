import { useEffect, useState } from 'react';
import Card from 'components/Card';
import { ProductCard } from 'types';
import { getProductsWithSearchParams } from 'api';
import Loading from 'components/Loading';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsWithSearchParams(searchValue).then((res) => {
      if (typeof res !== 'string') {
        setProductCards(res.data);
      } else {
        setApiReqErrorName(res);
      }
      setIsLoading(false);
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
      <div className={styles.main_products}>
        {isLoading && <Loading />}
        {productCards.length > 0 &&
          productCards.map((product) => (
            <Card key={product.id} product={product} onClick={(id) => cardClickHandle(id)} />
          ))}
        {productCards.length === 0 && <div className={styles.main_info}>{infoBlock}</div>}
      </div>
    </main>
  );
};

export default MainPage;
