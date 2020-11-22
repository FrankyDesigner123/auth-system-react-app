import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Card = () => {
	return (
		<View style={styles.card}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>some dummy title</Text>
				<View style={styles.course}>
					<Text style={styles.courseText}>Web Design</Text>
				</View>
			</View>

			<View style={styles.description}>
				<Text style={styles.descriptionText}>Description</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		borderRadius: 10,
		backgroundColor: '#fff',
		elevation: 5,
		height: 200,
		margin: 10,
	},
	titleContainer: {
		height: '35%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#ecf0f1',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'gray',
	},
	course: {
		margin: 10,
		backgroundColor: '#2652b0',
		height: 35,
		width: 100,
		borderRadius: 5,
	},
	courseText: {
		fontSize: 12,
		color: '#fff',
		textAlign: 'center',
		marginTop: 8,
	},
	description: {
		height: '65%',
		padding: 10,
		marginTop: 15,
	},
	descriptionText: {
		fontSize: 16,
		color: 'gray',
	},
});

export default Card;
