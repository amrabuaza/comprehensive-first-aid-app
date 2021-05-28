import React, { useEffect, useState, useContext } from 'react';
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
import { login } from "../../api";
import {
    Loader
} from '../../components';
import User from "../../context/user";

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};
interface FormData {
    username: string;
    password: string;
};

function LoginScreen({ navigation }: Props) {
    const [loading, setloading] = useState(false);
    const { user, handleLogin }: any = useContext(User.Context);

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

    useEffect(() => {
        if (user && !user.isGuestUser) {
            navigation.navigate('App')
        }
    }, [])

    // register inputs.
    useEffect(
        () => {
            register('username');
            register('password');
        },
        []
    );

    /**
     * Handle submit the form result.
     */
    const onSubmit = (payload: FormData) => {
        setloading(true);
        login(payload).then((response) => {
            setloading(false);
            if (response.kind !== 'OK') {
                setError('password', { message: 'Username or password is invalid' });
                return;
            }
            handleLogin(response.data);
            navigation.navigate('App')
        });
    };
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <Image
                    source={require('../../assets/paramedic.jpg')}
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
                            secureTextEntry={true}
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
                    <Text style={styles.btnText}>Login</Text>
                </Button>

                <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>
                    Create your account now
                        </Text>
            </KeyboardAwareScrollView>
            {loading && <Loader />}
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