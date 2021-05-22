import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login/login';
import SignupScreen from '../../screens/signup/signup';

// create auth stack navigator.
const AuthStack = createStackNavigator();

/**
 * A function component that shows an auth navigator.
 */
function AuthStackNavigator() {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <AuthStack.Screen
                name={'Login'}
                component={LoginScreen}
            />

            <AuthStack.Screen
                name={'Signup'}
                component={SignupScreen}
            />
        </AuthStack.Navigator>
    );
};

// export as default.
export default AuthStackNavigator;