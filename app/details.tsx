import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function DetailsScreen() {
	const router = useRouter();

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>This is the Details Screen</Text>
			<Button title="Go TO Home" onPress={() => router.push('/')} />
		</View>
	);
}
