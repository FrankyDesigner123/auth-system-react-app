import React from 'react';
import { StyleSheet, View, Text, ScrollView, Platform } from 'react-native';

const TaskDetailsScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.heading}>
					<Text style={styles.title}>Dummy title</Text>
				</View>

				<View style={styles.group}>
					<Text style={styles.label}>Course:</Text>
					<Text style={styles.value}>Web Design</Text>
				</View>

				<View style={styles.group}>
					<Text style={styles.label}>Description:</Text>
					<Text style={styles.value}>Some dummy description....</Text>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginVertical: 20,
	},
	heading: {
		marginHorizontal: 20,
		marginBottom: 10,
	},
	title: {
		fontSize: 24,
	},
	group: {
		marginHorizontal: 20,
		marginVertical: 10,
		flexDirection: 'row',
	},
	label: {
		fontSize: 18,
	},
	value: {
		fontSize: 18,
		fontWeight: 'bold',
		flexShrink: 1,
	},
});

export default TaskDetailsScreen;
