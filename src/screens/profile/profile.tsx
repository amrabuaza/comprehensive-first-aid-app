import React, { useEffect, useState, useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
    Text, View, Button
} from 'native-base';
import {
    Loader
} from '../../components';

import User from "../../context/user";
import { getCurrentUserInfo } from "../../api";
import { User as UserModel } from "../../api/models";

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};

/**
 * Profile screen
 * 
 * @param {Props} navigation 
 * @returns 
 */
function Profile({ navigation }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);
    const { userInfo, handleSetUserInfo }: any = useContext(User.Context);
    const [currentUserInfo, setCurrentUserInfo] = useState<UserModel>(userInfo);

    useEffect(() => {
        if (!userInfo) {
            setBodyloading(true);
            getCurrentUserInfo().then((response) => {
                handleSetUserInfo(response.user);
                setCurrentUserInfo(response.user as UserModel);
                setBodyloading(false);
            });
        } else {
            setCurrentUserInfo(userInfo);
        }

    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <View>
                <Text style={styles.title}>
                    User Profile
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Username :
                    </Text>
                    <Text style={styles.infoItemLabel}>
                        {currentUserInfo.username}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        First Name :
                </Text>
                    <Text style={styles.infoItemLabel}>
                        {currentUserInfo.firstName}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Last Name :  </Text>
                    <Text style={styles.infoItemLabel}>
                        {currentUserInfo.lastName}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Email :
                </Text>
                    <Text style={styles.infoItemLabel}>
                        {currentUserInfo.email}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Phone Number :
                    </Text>
                    <Text style={styles.infoItemLabel}>
                        {currentUserInfo.phoneNumber}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Created At :
                    </Text>
                    <Text style={styles.infoItemLabel}>
                        {currentUserInfo.createdAt}
                    </Text>
                </Text>
                <View style={styles.buttonGroup}>
                    <Button
                        onPress={() => navigation.navigate("EditUserInfo")}
                        style={styles.btn}
                        hasText
                        transparent
                    >
                        <Text style={styles.btnText}>Update Info</Text>
                    </Button>
                    <Button
                        onPress={() => navigation.navigate("ChangeUserPassword")}
                        style={styles.btn}
                        hasText
                        transparent
                    >
                        <Text style={styles.btnText}>Change password</Text>
                    </Button>
                </View>
            </View>
            {bodyLoading && <Loader />}
        </SafeAreaView>
    );
};

export default Profile;