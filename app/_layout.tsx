import { store } from '@/redux';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}>
				<Stack
					screenOptions={{
						gestureEnabled: true,
						animation: 'slide_from_right',
					}}
				>
					{/* Auth */}
					<Stack.Screen name="login" options={{ headerShown: false }} />
					<Stack.Screen name="register" options={{ headerShown: false }} />

					{/* Main App (tabs) */}
					<Stack.Screen name="(app)" options={{ headerShown: false }} />

					{/* Chat Room (outside tabs, full screen) */}
					<Stack.Screen
						name="chat/[id]"
						options={{ title: 'Chat', headerShown: true }}
					/>
				</Stack>
			</Provider>
		</GestureHandlerRootView>
	);
}
