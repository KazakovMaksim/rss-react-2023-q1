import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as profileActions } from 'store/profileCards/profileCards.slice';
import { actions as productsActions } from 'store/productCards/productCards.slice';

const rootActions = {
  ...profileActions,
  ...productsActions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
