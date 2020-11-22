import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	Button,
} from 'react-native';

const AddTaskScreen = () => {
	return (
		<ScrollView>
			<View style={styles.form}>
				<View style={styles.formGroup}>
					<Text style={styles.label}>Title:</Text>
					<TextInput style={styles.inputField} />
				</View>

				<View style={styles.formGroup}>
					<Text style={styles.label}>Course:</Text>
					<TextInput style={styles.inputField} />
				</View>

				<View style={styles.formGroup}>
					<Text style={styles.label}>Description:</Text>
					<TextInput style={styles.inputField} />
				</View>

				<View style={styles.buttonContainer}>
					<Button title="Add Task" />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	form: {
		margin: 20,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 10,
	},
	formGroup: {
		width: '100%',
	},
	label: {
		marginVertical: 10,
	},
	inputField: {
		paddingHorizontal: 2,
		paddingVertical: 8,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
	},
	buttonContainer: {
		marginTop: 20,
	},
});

export default AddTaskScreen;
