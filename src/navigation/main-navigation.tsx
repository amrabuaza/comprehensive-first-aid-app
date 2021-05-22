import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStackNavigator from './stack-navigators/auth';
import HomeStackNavigator from './stack-navigators/home';
import InstructionDetails from "../screens/instructionDetails/instructionDetails";
import EditUserInfo from "../screens/editUserInfo/editUserInfo";
import EditParamedicAddress from "../screens/editParamedicAddress/editParamedicAddress";
import ChangeUserPassword from "../screens/changeUserPassword/changeUserPassword";
import { StorageHelper } from '../utils/storage';

// create stack navigator.
const MainStack = createStackNavigator();

function MainNavigation() {

    const [initailNavigator, setInitailNavigator] = useState("Auth");
    useEffect(() => {
        StorageHelper.get("@USER").then((response: any) => {
            if (!response || response.isGuestUser) {
                setInitailNavigator("Home");
            }
        })
    }, [])

    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName={initailNavigator}
            >
                <MainStack.Screen
                    options={{ headerShown: false }}
                    name={'Auth'}
                    component={AuthStackNavigator}
                />
                <MainStack.Screen
                    options={{ headerShown: false }}
                    name={'App'}
                    component={HomeStackNavigator}
                />
                <MainStack.Screen
                    name={'InstructionDetails'}
                    options={{ title: 'Instruction Details' }}
                    component={InstructionDetails}
                />
                <MainStack.Screen
                    name={'EditUserInfo'}
                    options={{ title: 'Edit User Info' }}
                    component={EditUserInfo}
                />
                <MainStack.Screen
                    name={'ChangeUserPassword'}
                    options={{ title: 'Change password' }}
                    component={ChangeUserPassword}
                />
                <MainStack.Screen
                    name={'EditParamedicAddress'}
                    options={{ title: 'Edit Paramedic Address' }}
                    component={EditParamedicAddress}
                />

            </MainStack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;