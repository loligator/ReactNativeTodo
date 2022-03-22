import {Text, View, StyleSheet} from "react-native";
import Todo, { Task } from "./todo";


export default function TodoList() {
	const testTasks: Task[] = [
		{
			name: "Task 1",
			status: false
		},
		{
			name: "Task 2",
			status: false,
		},
		{
			name: "Task 3",
			status: false,
		}
	];
	return (
		<View>
			<Text>My Tasks:</Text>
			{testTasks.map((task, index) => (
				<Todo key={index} task={task}/>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	tasklist: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
	}
});