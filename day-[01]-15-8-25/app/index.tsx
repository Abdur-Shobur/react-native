import { useState } from 'react';
import {
	Button,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';

export default function Index() {
	const [count, setCount] = useState(0);
	const [task, setTask] = useState('');
	const [todos, setTodos] = useState<string[]>([]);

	const addTask = () => {
		if (task.trim()) {
			setTodos((e) => [...e, task]);
		}
	};
	return (
		<ScrollView>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>{count}</Text>
				<Button title="Increment" onPress={() => setCount(count + 1)} />
			</View>

			<View>
				<Text>My Todo List</Text>
				<TextInput
					style={styles.input}
					placeholder="Add a task"
					value={task}
					onChangeText={setTask}
				/>
				<Button title="Add Task" onPress={addTask} />
				{todos.map((item, index) => (
					<Text key={index} style={styles.todoItem}>
						{item}
					</Text>
				))}
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		marginTop: 50,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: '#aaa',
		padding: 10,
		marginBottom: 10,
		borderRadius: 5,
	},
	list: {
		marginTop: 20,
	},
	todoItem: {
		padding: 10,
		backgroundColor: '#eee',
		borderBottomWidth: 1,
		borderColor: '#ccc',
	},
});
