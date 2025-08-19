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
import { useRegistrationMutation } from './auth.api-slice';
import { RegisterFormValues, registerSchema } from './auth.schema';

export default function RegisterScreen() {
	const router = useRouter();
	const [registerUser, { isLoading, error }] = useRegistrationMutation();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		mode: 'onChange',
		defaultValues: { email: '', password: '', confirmPassword: '' },
	});

	const onSubmit = async (values: RegisterFormValues) => {
		try {
			await registerUser({
				email: values.email,
				password: values.password,
			}).unwrap();
			// After successful registration, navigate to login (or auto-login)
			router.replace('/login');
		} catch (e) {
			// handled in UI
		}
	};

	const apiError =
		(error as any)?.data?.message || (error as any)?.error || undefined;

	return (
		<KeyboardAvoidingView
			behavior={Platform.select({ ios: 'padding', android: undefined })}
			style={{ flex: 1 }}
		>
			<View style={{ flex: 1, justifyContent: 'center', padding: 20, gap: 14 }}>
				<Text style={{ fontSize: 22, fontWeight: '700', textAlign: 'center' }}>
					📝 Register
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

				{/* Confirm Password */}
				<Controller
					control={control}
					name="confirmPassword"
					render={({ field: { onChange, onBlur, value } }) => (
						<>
							<TextInput
								placeholder="Confirm Password"
								secureTextEntry
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								style={{
									borderWidth: 1,
									borderColor: errors.confirmPassword ? 'red' : '#ccc',
									borderRadius: 10,
									padding: 12,
								}}
							/>
							{errors.confirmPassword && (
								<Text style={{ color: 'red' }}>
									{errors.confirmPassword.message}
								</Text>
							)}
						</>
					)}
				/>

				{apiError && <Text style={{ color: 'red' }}>{apiError}</Text>}

				<View style={{ gap: 10 }}>
					<Button
						title={
							isLoading || isSubmitting ? 'Creating account...' : 'Register'
						}
						onPress={handleSubmit(onSubmit)}
						disabled={!isValid || isLoading || isSubmitting}
					/>
					<Button title="Back to Login" onPress={() => router.back()} />
				</View>

				{(isLoading || isSubmitting) && <ActivityIndicator size="small" />}
			</View>
		</KeyboardAvoidingView>
	);
}
