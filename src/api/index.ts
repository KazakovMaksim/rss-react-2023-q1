import axios from 'axios';
import { baseURL } from 'constants/index';
import { ProductCard } from 'types';

export const getProducts = async (params = {}) => {
  try {
    const options = {
      ...{
        method: 'get',
        url: baseURL,
      },
      params,
    };
    const resultCards = await axios<ProductCard[]>(options);

    return resultCards;
  } catch (error) {
    let errorMessage = '';
    if (axios.isAxiosError(error)) {
      errorMessage = `** AXIOS error = ${error.code} **`;
    } else if (error instanceof Error) {
      errorMessage = `** NON_AXIOS error = ${error.message} **`;
    }
    return errorMessage;
  }
};

export const getProductsWithSearchParams = async (searchValue: string) => {
  const params = {
    q: searchValue,
  };

  return getProducts(params);
};
