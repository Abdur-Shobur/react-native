import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import counterReducer from './features/counter/counterSlice';

const rootReducer = combineReducers({
	counter: counterReducer,
	[apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
