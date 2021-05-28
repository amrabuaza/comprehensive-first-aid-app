import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
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
import {
    Loader
} from '../../components';
import User from "../../context/user";
import { User as UserModel } from "../../api/models";
import { updateUserInfo } from "../../api";


// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};
interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
};

function EditUserInfo({ navigation }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);
    const { userInfo, handleSetUserInfo }: any = useContext(User.Context);
    const [currentUserInfo, setCurrentUserInfo] = useState<UserModel>(userInfo);

    // validation schema.
    const validation = Yup.object().shape({
        first_name: Yup.string()
            .required('First name is required'),
        last_name: Yup.string()
            .required('Last name is required'),
        email: Yup.string()
            .required('Email is required').email("email must be valid email"),
        phone_number: Yup.string()
            .required('Phone number is required')
    });

    // use react hook form.
    const {
        setValue,
        register,
        unregister,
        handleSubmit,
        setError,
        formState: { errors },
        watch
    } = useForm<FormData>({
        resolver: yupResolver(validation),
        defaultValues: {
            first_name: currentUserInfo?.firstName || '',
            last_name: currentUserInfo?.lastName || '',
            email: currentUserInfo?.email || '',
            phone_number: currentUserInfo?.phoneNumber || '',
        }
    });

    const model = watch();

    // register inputs.
    useEffect(
        () => {
            register('first_name');
            register('last_name');
            register('email');
            register('phone_number');
        },
        []
    );

    /**
     * Handle submit the form result.
     */
    const onSubmit = (payload: FormData) => {
        setBodyloading(true);
        updateUserInfo(payload).then((response) => {
            if (response.kind !== 'OK') {
                setBodyloading(false);
                setPropertyErrorMessage(response.errorMessage);
                return;
            }
            handleSetUserInfo(response.user);
            navigation.navigate("Profile");
        });
    };


    /**
     * Set property error message 
     * 
     * @param errorMessage 
     */
    function setPropertyErrorMessage(errorMessage: string) {
        if (errorMessage.includes('email')) {
            setError('email', { message: errorMessage });
        } else if (errorMessage.includes('phone')) {
            setError('phone_number', { message: errorMessage });
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.inputsContainer}>
                    <Text style={styles.label}>First Name : </Text>
                    <Item error={!!errors.first_name?.message}>
                        <Input
                            value={model?.first_name}
                            onChangeText={(val) => { setValue('first_name', val) }}
                        />
                    </Item>
                    {
                        !!errors.first_name?.message &&
                        <Text style={styles.error} note>
                            {errors.first_name?.message}
                        </Text>
                    }

                    <Text style={styles.label}>Last Name : </Text>
                    <Item error={!!errors.last_name?.message}>
                        <Input
                            value={model?.last_name}
                            onChangeText={(val) => { setValue('last_name', val) }}
                        />
                    </Item>
                    {
                        !!errors.last_name?.message &&
                        <Text style={styles.error} note>
                            {errors.last_name?.message}
                        </Text>
                    }

                    <Text style={styles.label}>Email : </Text>
                    <Item error={!!errors.email?.message}>
                        <Input
                            value={model?.email}
                            onChangeText={(val) => { setValue('email', val) }}
                        />
                    </Item>
                    {
                        !!errors.email?.message &&
                        <Text style={styles.error} note>
                            {errors.email?.message}
                        </Text>
                    }

                    <Text style={styles.label}>Phone number : </Text>
                    <Item error={!!errors.phone_number?.message}>
                        <Input
                            value={model?.phone_number}
                            onChangeText={(val) => { setValue('phone_number', val) }}
                        />
                    </Item>
                    {
                        !!errors.phone_number?.message &&
                        <Text style={styles.error} note>
                            {errors.phone_number?.message}
                        </Text>
                    }

                </View>

                <View style={styles.buttonGroup}>
                    <Button
                        onPress={handleSubmit(onSubmit)}
                        style={styles.btn}
                        hasText
                        transparent
                    >
                        <Text style={styles.btnText}>Save</Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
            {bodyLoading && <Loader />}
        </SafeAreaView>
    );
};

export default EditUserInfo;