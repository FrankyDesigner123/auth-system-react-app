import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const jwtDecode = require('jwt-decode');

const HomeScreen = (props) => {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('');

	const loadProfile = async () => {
		// fetch token
		const token = await AsyncStorage.getItem('token');
		// if token does not exist we send user back to login
		if (!token) {
			props.navigation.navigate('Login');
		}
		// decoding the token
		const decoded = jwtDecode(token);
		setFullName(decoded.fullName);
		setEmail(decoded.email);
		setRole(decoded.role);
		console.log(decoded);
	};

	const logout = (props) => {
		AsyncStorage.removeItem('token')
			.then(() => {
				props.navigation.replace('Login');
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		loadProfile();
	});

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.text}>Welcome {fullName ? fullName : ''}</Text>
			</View>

			<View>
				<Text style={styles.text}>Your Email: {email ? email : ''}</Text>
			</View>

			<View>
				<Text style={styles.text}>Role: {role ? role : ''}</Text>
			</View>

			<View>
				<Button
					title="Log out"
					onPress={() => {
						logout(props);
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 40,
	},
	text: {
		fontSize: 22,
	},
});

export default HomeScreen;
