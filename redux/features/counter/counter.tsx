import { RootState } from '@/redux/store';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

export function Counter() {
	const count = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Counter Example</Text>
			<Text style={styles.count}>{count}</Text>

			<View style={styles.buttons}>
				<Button title="+" onPress={() => dispatch(increment())} />
				<Button title="-" onPress={() => dispatch(decrement())} />
				<Button title="Reset" onPress={() => dispatch(reset())} />
				<Button title="+5" onPress={() => dispatch(incrementByAmount(5))} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	count: {
		fontSize: 48,
		fontWeight: 'bold',
		marginBottom: 30,
	},
	buttons: {
		gap: 10,
		width: '60%',
	},
});
