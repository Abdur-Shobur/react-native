import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email('Enter a valid email'),
	password: z.string().min(6, 'Minimum 6 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
	.object({
		email: z.email('Enter a valid email'),
		password: z
			.string({ error: 'Enter a valid password' })
			.min(6, 'Minimum 6 characters'),
		confirmPassword: z
			.string({ error: 'Enter a valid password' })
			.min(6, 'Minimum 6 characters'),
	})
	.refine((vals) => vals.password === vals.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

export type RegisterFormValues = z.infer<typeof registerSchema>;
