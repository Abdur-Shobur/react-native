import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function RegisterScreen() {
	const router = useRouter();

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>📝 Register Screen</Text>
			<Button
				title="Already have an account? Login"
				onPress={() => router.push('/login')}
			/>
			<Button
				title="Register & Enter App"
				onPress={() => router.replace('/(app)')}
			/>
		</View>
	);
}
