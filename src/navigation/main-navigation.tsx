import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './stack-navigators/auth';

// create stack navigator.
const MainStack = createStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen
                    options={{ headerShown: false }}
                    name={'Auth'}
                    component={AuthStackNavigator}
                />
                
                {/* <MainStack.Screen
                    name={'App'}
                /> */}
            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;