import { useEffect, useState } from 'react';
import Card from 'components/Card';

import axios from 'axios';
import { ProductCard } from 'types';
import { baseURL } from 'constants/index';
import styles from './MainPage.module.scss';
import Search from './Search';

const MainPage = () => {
  const [productCards, setProductCards] = useState<ProductCard[] | []>([]);

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

  return (
    <main className={styles.main}>
      <Search />
      {productCards.length > 0 &&
        productCards.map((product) => <Card key={product.id} product={product} />)}
    </main>
  );
};

export default MainPage;
