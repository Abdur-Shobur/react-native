import { useRouter } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function ChatList() {
	const router = useRouter();

	return (
		<ScrollView>
			<View style={{ flex: 1, padding: 20 }}>
				<Text>💬 Chat List</Text>
			</View>
		</ScrollView>
	);
}
