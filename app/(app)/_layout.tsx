import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function AppTabs() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#007AFF',
				tabBarInactiveTintColor: 'gray',
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Chats',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="chat" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="contacts"
				options={{
					title: 'Contacts',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="contacts" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: 'Settings',
					tabBarIcon: ({ color, size }) => (
						<MaterialIcons name="settings" color={color} size={size} />
					),
				}}
			/>
		</Tabs>
	);
}
