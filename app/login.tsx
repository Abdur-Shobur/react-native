import AuthLoginScreen from '@/redux/features/auth/admin.login';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function LoginScreen() {
	const router = useRouter();

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<AuthLoginScreen />
		</View>
	);
}
