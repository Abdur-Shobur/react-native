import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
	ActivityIndicator,
	Button,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	View,
} from 'react-native';
import { useLoginMutation } from './auth.api-slice';
import { LoginFormValues, loginSchema } from './auth.schema';
// If your alias differs, adjust paths accordingly

export default function AuthLoginScreen() {
	const router = useRouter();
	const [login, { isLoading, error }] = useLoginMutation();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
		defaultValues: { email: '', password: '' },
	});

	const onSubmit = async (values: LoginFormValues) => {
		try {
			const res = await login(values).unwrap();
			// TODO: store tokens/user in Redux if your apiSlice sets it elsewhere
			router.replace('/(app)');
		} catch (e) {
			// handled below in UI
		}
	};

	// Try to extract API error message (adjust to your API shape)
	const apiError =
		(error as any)?.data?.message || (error as any)?.error || undefined;

	return (
		<KeyboardAvoidingView
			behavior={Platform.select({ ios: 'padding', android: undefined })}
			style={{ flex: 1 }}
		>
			<View style={{ flex: 1, justifyContent: 'center', padding: 20, gap: 14 }}>
				<Text style={{ fontSize: 22, fontWeight: '700', textAlign: 'center' }}>
					🔐 Login
				</Text>

				{/* Email */}
				<Controller
					control={control}
					name="email"
					render={({ field: { onChange, onBlur, value } }) => (
						<>
							<TextInput
								placeholder="Email"
								inputMode="email"
								autoCapitalize="none"
								autoCorrect={false}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								style={{
									borderWidth: 1,
									borderColor: errors.email ? 'red' : '#ccc',
									borderRadius: 10,
									padding: 12,
								}}
							/>
							{errors.email && (
								<Text style={{ color: 'red' }}>{errors.email.message}</Text>
							)}
						</>
					)}
				/>

				{/* Password */}
				<Controller
					control={control}
					name="password"
					render={({ field: { onChange, onBlur, value } }) => (
						<>
							<TextInput
								placeholder="Password"
								secureTextEntry
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								style={{
									borderWidth: 1,
									borderColor: errors.password ? 'red' : '#ccc',
									borderRadius: 10,
									padding: 12,
								}}
							/>
							{errors.password && (
								<Text style={{ color: 'red' }}>{errors.password.message}</Text>
							)}
						</>
					)}
				/>

				{apiError && <Text style={{ color: 'red' }}>{apiError}</Text>}

				<View style={{ gap: 10 }}>
					<Button
						title={isLoading || isSubmitting ? 'Logging in...' : 'Login'}
						onPress={handleSubmit(onSubmit)}
						disabled={!isValid || isLoading || isSubmitting}
					/>
					<Button
						title="Go to Register"
						onPress={() => router.push('/register')}
					/>
				</View>

				{(isLoading || isSubmitting) && <ActivityIndicator size="small" />}
			</View>
		</KeyboardAvoidingView>
	);
}
