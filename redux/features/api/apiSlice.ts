import { env } from '@/lib';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
	baseUrl: env.apiUrl,
	prepareHeaders: async (headers) => {
		console.log(env);
		const token = await AsyncStorage.getItem('accessToken');
		if (token) headers.set('Authorization', `Bearer ${token}`);
		return headers;
	},
});

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery,
	endpoints: () => ({}),
	refetchOnReconnect: true,
	refetchOnFocus: true,
	tagTypes: ['Users', 'Tasks', 'Groups', 'Messages'],
	keepUnusedDataFor: 50000,
});
