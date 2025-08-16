import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Index() {
	const router = useRouter();

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home Screen</Text>
			<Button title="Go to Details" onPress={() => router.push('/details')} />
		</View>
	);
}
