import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

import Card from './components/card';

const HomeScreen = (props) => {
	return (
		<View style={styles.container}>
			<Card navigation={props.navigation} />
			<FloatingAction
				animated={false}
				showBackground={false}
				position="right"
				onPressMain={() => props.navigation.navigate('AddTask')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
