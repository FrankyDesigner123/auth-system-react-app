import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {
	const loadProfile = async () => {
		// fetch token
		const token = await AsyncStorage.getItem('token');
		// if token does not exist we send user back to login
		if (!token) {
			props.navigation.navigate('Login');
		}
		console.log(token);
	};

	useEffect(() => {
		loadProfile();
	});

	return (
		<View>
			<Text>Login Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;
