import { useState } from 'react';
import Card from 'components/Card';
import Loading from 'components/Loading';
import { useGetProductsQuery } from 'store/api/api';
import usedTypedSelector from 'hooks/useTypedSelector';
import { ErrorItem } from 'types';
import Modal from './Modal';
import Search from './Search';
import styles from './MainPage.module.scss';

export enum InfoMessages {
  Empty = 'There are no any cards according to this searching value!',
  GettingCardErr = 'There are some errors during getting cards!',
}

const MainPage = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [cardIdForModal, setCardIdForModal] = useState('');
  const { searchValue } = usedTypedSelector((state) => state.products);
  const { isLoading, error, data: productCards } = useGetProductsQuery(searchValue, {});

  const cardClickHandle = (id: number) => {
    setCardIdForModal(id.toString());
    setIsModalOpened(!isModalOpened);
  };

  const infoBlock = error
    ? `${InfoMessages.GettingCardErr} (${error && (error as ErrorItem).status})`
    : InfoMessages.Empty;

  return (
    <main className={styles.main}>
      {isModalOpened && (
        <Modal onClick={() => setIsModalOpened(!isModalOpened)} id={cardIdForModal} />
      )}
      <Search />
      <div className={styles.main_products}>
        {isLoading && <Loading />}
        {productCards &&
          productCards.length > 0 &&
          productCards.map((product) => (
            <Card key={product.id} product={product} onClick={(id) => cardClickHandle(id)} />
          ))}
        {(!productCards || productCards?.length === 0) && (
          <div className={styles.main_info}>{infoBlock}</div>
        )}
      </div>
    </main>
  );
};

export default MainPage;
