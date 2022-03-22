import {Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react';

export interface Task {
	name: string,
	status: boolean,
}

export interface TodoProps {
	task: Task
}

export default function Todo(props: TodoProps) {
	const [taskStatus, setTaskStatus] = useState(false);
	return (
		<View>
			<CheckBox
				value={taskStatus}
				onValueChange={(b: boolean) => setTaskStatus(b)}
			/>
			<Text>{props.task.name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	task: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
});