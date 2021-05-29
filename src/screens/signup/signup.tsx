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
import { RadioButton } from 'react-native-paper';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    Loader
} from '../../components';
import { signup } from '../../api';
import User from "../../context/user";

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};
interface FormData {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    userType: string;
};

function SignupScreen({ navigation }: Props) {
    const [loading, setloading] = useState(false);
    const [userType, setUserType] = useState("user");
    const [certificate, setCertificate] = useState(null);
    const { user, handleLogin }: any = useContext(User.Context);
    // validation schema.
    const validation = Yup.object().shape({
        username: Yup.string()
            .required('username is required'),
        phoneNumber: Yup.string()
            .required('phone number is required'),
        email: Yup.string()
            .required('email is required').email("email must be valid email"),
        password: Yup.string()
            .required('passoword is required')
            .min(8, 'passwors should be 8 characters')
    });

    /**
     * Select file form mobile
     */
    const selectFile = async () => {
        // // Opening Document Picker to select one file
        // try {
        //     const res = await DocumentPicker.pick({
        //         // Provide which type of file you want user to pick
        //         type: [DocumentPicker.types.pdf],
        //         // There can me more options as well
        //         // DocumentPicker.types.allFiles
        //         // DocumentPicker.types.images
        //         // DocumentPicker.types.plainText
        //         // DocumentPicker.types.audio
        //         // DocumentPicker.types.pdf
        //     });
        //     // Printing the log realted to the file
        //     console.log('res : ' + JSON.stringify(res));
        //     // Setting the state to show single file attributes
        //     //setCertificate(res);
        // } catch (err) {
        //     setCertificate(null);
        //     // Handling any exception (If any)
        //     if (DocumentPicker.isCancel(err)) {
        //         // If user canceled the document selection
        //         alert('Canceled');
        //     } else {
        //         // For Unknown Error
        //         alert('Unknown Error: ' + JSON.stringify(err));
        //         throw err;
        //     }
        // }
    };

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
            register('email');
            register('phoneNumber');
            register('password');
        },
        []
    );

    /**
     * Handle submit the form result.
     */
    const onSubmit = (payload: FormData) => {
        setloading(true);
        payload.userType = userType;
        signup(payload).then((response) => {
            setloading(false);
            if (response.kind !== 'OK') {
                setPropertyErrorMessage(response.errorMessage);
                return;
            }
            handleLogin(response.data);
            navigation.navigate('App')
        });
    };

    /**
     * Set property error message 
     * 
     * @param errorMessage 
     */
    function setPropertyErrorMessage(errorMessage: string) {
        if (errorMessage.includes('username')) {
            setError('username', { message: errorMessage });
        } else if (errorMessage.includes('email')) {
            setError('email', { message: errorMessage });
        } else if (errorMessage.includes('phone')) {
            setError('phoneNumber', { message: errorMessage });
        }
    }

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
                            placeholder="Username"
                        />
                    </Item>
                    {
                        !!errors.username?.message &&
                        <Text style={styles.error} note>
                            {errors.username?.message}
                        </Text>
                    }

                    <Item error={!!errors.phoneNumber?.message}>
                        <Input
                            onChangeText={(val) => { setValue('phoneNumber', val) }}
                            placeholder="Phone Number"
                        />
                    </Item>
                    {
                        !!errors.phoneNumber?.message &&
                        <Text style={styles.error} note>
                            {errors.phoneNumber?.message}
                        </Text>
                    }

                    <Item error={!!errors.email?.message}>
                        <Input
                            onChangeText={(val) => { setValue('email', val) }}
                            placeholder="Email"
                        />
                    </Item>
                    {
                        !!errors.email?.message &&
                        <Text style={styles.error} note>
                            {errors.email?.message}
                        </Text>
                    }

                    <Item error={!!errors.password?.message}>
                        <Input
                            secureTextEntry={true}
                            onChangeText={(val) => { setValue('password', val) }}
                            placeholder="Password"
                        />
                    </Item>
                    {
                        !!errors.password?.message &&
                        <Text style={styles.error} note>
                            {errors.password?.message}
                        </Text>
                    }

                    {userType === "paramedic" ? (
                        <Item style={styles.signupAsButtons}>
                            <Text onPress={selectFile}>Upload certificate</Text>
                        </Item>
                    ) : []}

                    <Text style={styles.signupAsMessage}>Sinup as : </Text>
                    <Item style={styles.signupAsButtons}>
                        <Text>User</Text>
                        <RadioButton
                            value="User"
                            status={userType === 'user' ? 'checked' : 'unchecked'}
                            onPress={() => setUserType('user')}
                        />
                        <Text>Paramedic</Text>
                        <RadioButton
                            value="Paramedic"
                            status={userType === 'paramedic' ? 'checked' : 'unchecked'}
                            onPress={() => setUserType('paramedic')}
                        />
                    </Item>
                </View>

                <Button
                    onPress={handleSubmit(onSubmit)}
                    style={styles.btn}
                    hasText
                    transparent
                >
                    <Text style={styles.btnText}>Signup</Text>
                </Button>

                <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                    Sign in
                        </Text>
            </KeyboardAwareScrollView>
            {loading && <Loader />}
        </SafeAreaView>
    );
};

export default SignupScreen;