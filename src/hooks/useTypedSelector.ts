import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const usedTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default usedTypedSelector;
