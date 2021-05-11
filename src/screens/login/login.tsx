import React, { useEffect } from 'react';
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
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StackNavigationProp } from '@react-navigation/stack';

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};
interface FormData {
    username: string;
    password: string;
};

function LoginScreen({ navigation }: Props) {

    // use react hook form.
    const {
        setValue,
        register,
        unregister,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<FormData>({
        resolver: yupResolver(validation)
    });

    // register inputs.
    useEffect(
        () => {
            register('username');
            register('password');

            return () => {
                unregister('username');
                unregister('password');
            }
        },
        []
    );

    /**
     * Handle submit the form result.
     */
    const onSubmit = (payload: FormData) => {
        navigation.navigate('Signup')
        // navigation.goBack();
    };
    console.log({ errors })
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
                    <Item error={!!errors.username?.message}>
                        <Input
                            onChangeText={(val) => { setValue('username', val) }}
                            placeholder="username"
                        />
                    </Item>
                    {
                        !!errors.username?.message &&
                        <Text style={styles.error} note>
                            {errors.password?.message}
                        </Text>
                    }

                    <Item error={!!errors.password?.message}>
                        <Input
                            onChangeText={(val) => { setValue('password', val) }}
                            placeholder="password"
                        />
                    </Item>
                    {
                        !!errors.password?.message &&
                        <Text style={styles.error} note>
                            {errors.password?.message}
                        </Text>
                    }

                </View>

                <Button
                    onPress={handleSubmit(onSubmit)}
                    style={styles.btn}
                    hasText
                    transparent
                >
                    <Text>Login</Text>
                </Button>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

// validation schema.
const validation = Yup.object().shape({
    username: Yup.string()
        .required('username is required'),
    password: Yup.string()
        .required('passoword is required')
        .min(6, 'passwors should be 6 characters')
});

export default LoginScreen;