import React, { useEffect, useState } from 'react';
import {
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
import {
    Loader
} from '../../components';
import { changeUserPassword } from "../../api";


// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};
interface FormData {
    old_password: string;
    new_password: string;
};

function ChangeUserPassword({ navigation }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);

    // validation schema.
    const validation = Yup.object().shape({
        old_password: Yup.string()
            .required('Old passoword is required')
            .min(8, 'Old password should be 8 characters'),
        new_password: Yup.string()
            .required('New passoword is required')
            .min(8, 'New password should be 8 characters')
    });

    // use react hook form.
    const {
        setValue,
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(validation),
    });


    // register inputs.
    useEffect(
        () => {
            register('old_password');
            register('new_password');
        },
        []
    );

    /**
     * Handle submit the form result.
     */
    const onSubmit = (payload: FormData) => {
        setBodyloading(true);
        changeUserPassword(payload).then((response) => {
            if (response.kind !== 'OK') {
                setBodyloading(false);
                setPropertyErrorMessage(response.errorMessage);
                return;
            }
            navigation.navigate("Profile");
        });
    };


    /**
     * Set property error message 
     * 
     * @param errorMessage 
     */
    function setPropertyErrorMessage(errorMessage: string) {
        if (errorMessage.includes('Old password')) {
            setError('old_password', { message: errorMessage });
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.inputsContainer}>
                    <Text style={styles.label}>Old password : </Text>
                    <Item error={!!errors.old_password?.message}>
                        <Input
                            secureTextEntry={true}
                            onChangeText={(val) => { setValue('old_password', val) }}
                        />
                    </Item>
                    {
                        !!errors.old_password?.message &&
                        <Text style={styles.error} note>
                            {errors.old_password?.message}
                        </Text>
                    }

                    <Text style={styles.label}>New password : </Text>
                    <Item error={!!errors.new_password?.message}>
                        <Input
                            secureTextEntry={true}
                            onChangeText={(val) => { setValue('new_password', val) }}
                        />
                    </Item>
                    {
                        !!errors.new_password?.message &&
                        <Text style={styles.error} note>
                            {errors.new_password?.message}
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



export default ChangeUserPassword;