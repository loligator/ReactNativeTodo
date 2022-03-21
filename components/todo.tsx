import {Text, View} from 'react-native';

export interface Task {
	name: string,
	status: boolean,
}

export interface TodoProps {
	task: Task
}

export default function Todo(props: TodoProps) {
	return (
		<View>
			<Text>Task: {props.task.name}</Text>
		</View>
	);
}