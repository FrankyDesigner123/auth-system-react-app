import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TextInput,
	Button,
	KeyboardAvoidingView,
} from 'react-native';
import { Formik } from 'formik';

const AddTaskScreen = () => {
	return (
		<KeyboardAvoidingView
			behavior="padding"
			keyboardVerticalOffset={100}
			style={{ flex: 1 }}
		>
			<ScrollView>
				<Formik
					initialValues={{
						title: '',
						course: '',
						desription: '',
					}}
					onSubmit={(values) => {
						console.log(values);
					}}
				>
					{(props) => (
						<View style={styles.form}>
							<View style={styles.formGroup}>
								<Text style={styles.label}>Title:</Text>
								<TextInput
									style={styles.inputField}
									onChangeText={props.handleChange('title')}
									value={props.values.title}
								/>
							</View>

							<View style={styles.formGroup}>
								<Text style={styles.label}>Course:</Text>
								<TextInput
									style={styles.inputField}
									onChangeText={props.handleChange('course')}
									value={props.values.course}
								/>
							</View>

							<View style={styles.formGroup}>
								<Text style={styles.label}>Description:</Text>
								<TextInput
									style={styles.inputField}
									onChangeText={props.handleChange('description')}
									value={props.values.description}
								/>
							</View>

							<View style={styles.buttonContainer}>
								<Button title="Add Task" onPress={props.handleSubmit} />
							</View>
						</View>
					)}
				</Formik>
			</ScrollView>
		</KeyboardAvoidingView>
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
