import React, { useContext } from 'react';
import HomeScreen from '../../screens/home/home';
import Profile from "../../screens/profile/profile";
import ParamedicAddress from "../../screens/paramedicAddress/paramedicAddress";
import Emergency from '../../screens/emergency/emergency';
import Logout from "../../screens/logout/logout";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    COLOR,
    commonStyles,
} from '../../theme';
import {
    StyleSheet,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import User from "../../context/user";

// create home stack navigator.
const Tab = createBottomTabNavigator();

/**
 * A function component that shows an home navigator.
 */
function HomeStackNavigator() {
    const { isParamedic }: any = useContext(User.Context);
    return (
        <Tab.Navigator
            initialRouteName={INITIAL_BOTTOM_TAB_NAVIGATOR}
            backBehavior="history"
            tabBarOptions={{
                style: styles.tabbar,
                allowFontScaling: true,
                adaptive: true,
                activeTintColor: COLOR.CRIMSON,
                inactiveTintColor: COLOR.CHARCOAL,
                keyboardHidesTabBar: true,
            }}
        >

            {/** Home */}
            <Tab.Screen
                name={'Home'}
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    ),
                    unmountOnBlur: true
                }}
            />

            {/** Profile */}
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="user-circle"
                            color={color}
                            size={size}
                        />
                    ),
                    unmountOnBlur: true
                }}
            />

            {/** ParamedicAddress */}
            {isParamedic ? (
                <Tab.Screen
                    name="ParamedicAddress"
                    component={ParamedicAddress}
                    options={{
                        tabBarLabel: "Paramedic Address",
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome
                                name="location-arrow"
                                color={color}
                                size={size}
                            />
                        ),
                        unmountOnBlur: true
                    }}
                />
            ) : []}

            {/** Emergency */}
            <Tab.Screen
                name="Emergency"
                component={Emergency}
                options={{
                    tabBarLabel: "Emergency",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="exclamation-triangle"
                            color={color}
                            size={size}
                        />
                    ),
                    unmountOnBlur: true
                }}
            />

            {/** Logout */}
            <Tab.Screen
                name="Logout"
                component={Logout}
                options={{
                    tabBarLabel: "Logout",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="sign-out"
                            color={color}
                            size={size}
                        />
                    ),
                    unmountOnBlur: true
                }}
            />
        </Tab.Navigator>
    );
};

/**
 * constants
 */
const INITIAL_BOTTOM_TAB_NAVIGATOR = "Home";

/**
* styles
*/
const styles = StyleSheet.create({
    tabbar: {
        borderTopColor: COLOR.CHARCOAL,
        backgroundColor: COLOR.LIGHT,
        ...commonStyles.crossElevation
    },
});

// export as default.
export default HomeStackNavigator;