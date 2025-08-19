import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ChatRoom() {
	const { id } = useLocalSearchParams();

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Chat with User ID: {id}</Text>
		</View>
	);
}
