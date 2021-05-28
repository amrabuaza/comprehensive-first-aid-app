import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
    Text, View, Button
} from 'native-base';
import {
    Image,
} from 'react-native';
import {
    Loader
} from '../../components';

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};

/**
 * Emergency screen
 * 
 * @param {Props} navigation 
 * @returns 
 */
function Emergency({ navigation }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);

    return (
        <SafeAreaView style={styles.container} >
            <View>
                <Text style={styles.title}>
                    Emergency
                </Text>
                <Image
                    source={require('../../assets/emergency.jpg')}
                    style={styles.img}
                    resizeMode={'contain'}
                />
                <View style={styles.buttonGroup}>
                    <Button
                        onPress={() => navigation.navigate("ChangeUserPassword")}
                        style={styles.btn}
                        hasText
                        transparent
                    >
                        <Text style={styles.btnText}>Send</Text>
                    </Button>
                </View>
            </View>
            {bodyLoading && <Loader />}
        </SafeAreaView>
    );
};

export default Emergency;