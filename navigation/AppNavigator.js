import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

// init createStackNavigator
const Stack = createStackNavigator();

// setup navigator
function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }} // hide headerbar
				/>
				<Stack.Screen
					name="Register"
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;
