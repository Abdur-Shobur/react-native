import Constants from 'expo-constants';

export const env = {
	apiUrl: process.env.EXPO_PUBLIC_API_URL,
	apiKey: Constants.expoConfig?.extra?.apiKey,
};
