import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: typeof useSelector = useSelector;

/*
|--------------------------------------------------------------------------
| Or, if you want type-safe selectors:
|--------------------------------------------------------------------------
        export const useAppSelector = <TSelected>(
        selector: (state: RootState) => TSelected
        ) => useSelector(selector);
*/
