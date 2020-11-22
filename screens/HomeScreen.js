import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch } from 'react-redux';

import Card from './components/card';
import * as taskAction from '../redux/actions/taskAction';

const HomeScreen = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(taskAction.fetchTasks());
	}, [dispatch]);

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
