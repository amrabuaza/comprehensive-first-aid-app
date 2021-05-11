import React from 'react';
import {
    Image,
    View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import {
    Input,
    Item,
    Button,
    Text
} from 'native-base';

function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <Image
                    source={{ uri: 'https://img.freepik.com/free-vector/broken-frosted-glass-realistic-icon_1284-12125.jpg?size=338&ext=jpg' }}
                    style={styles.img}
                    resizeMode={'contain'}
                />

                <View style={styles.inputsContainer}>
                    <Item>
                        <Input placeholder="username" />
                    </Item>

                    <Item>
                        <Input placeholder="password" />
                    </Item>
                </View>

                <Button style={styles.btn} hasText transparent>
                    <Text>Login</Text>
                </Button>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;