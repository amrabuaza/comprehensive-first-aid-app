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
    country: string;
    city: string;
    region: string;
    building_number_or_name: string;
    floor_number: string;
    apartment_number: string;
    longitude: number;
    latitude: number;
};

function EditParamedicAddress({ navigation }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);
    const { userInfo, handleSetUserInfo }: any = useContext(User.Context);
    const [currentUserInfo, setCurrentUserInfo] = useState<UserModel>(userInfo);

    // validation schema.
    const validation = Yup.object().shape({
        country: Yup.string()
            .required('Country is required'),
        city: Yup.string()
            .required('City is required'),
        region: Yup.string()
            .required('Region is required'),
        building_number_or_name: Yup.string()
            .required('Building number or name is required'),
        floor_number: Yup.string()
            .required('Floor number is required'),
        apartment_number: Yup.string()
            .required('Apartment number is required'),
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
    });

    const model = watch();

    // register inputs.
    useEffect(
        () => {
            register('country');
            register('city');
            register('region');
            register('building_number_or_name');
            register('floor_number');
            register('apartment_number');
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
                return;
            }
            handleSetUserInfo(response.user);
            navigation.navigate("Profile");
        });
    };


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.inputsContainer}>
                    <Text style={styles.label}>country : </Text>
                    <Item error={!!errors.country?.message}>
                        <Input
                            value={model?.country}
                            onChangeText={(val) => { setValue('country', val) }}
                        />
                    </Item>
                    {
                        !!errors.country?.message &&
                        <Text style={styles.error} note>
                            {errors.country?.message}
                        </Text>
                    }

                    <Text style={styles.label}>city : </Text>
                    <Item error={!!errors.city?.message}>
                        <Input
                            value={model?.city}
                            onChangeText={(val) => { setValue('city', val) }}
                        />
                    </Item>
                    {
                        !!errors.city?.message &&
                        <Text style={styles.error} note>
                            {errors.city?.message}
                        </Text>
                    }

                    <Text style={styles.label}>region : </Text>
                    <Item error={!!errors.region?.message}>
                        <Input
                            value={model?.region}
                            onChangeText={(val) => { setValue('region', val) }}
                        />
                    </Item>
                    {
                        !!errors.region?.message &&
                        <Text style={styles.error} note>
                            {errors.region?.message}
                        </Text>
                    }

                    <Text style={styles.label}>building_number_or_name : </Text>
                    <Item error={!!errors.building_number_or_name?.message}>
                        <Input
                            value={model?.building_number_or_name}
                            onChangeText={(val) => { setValue('building_number_or_name', val) }}
                        />
                    </Item>
                    {
                        !!errors.building_number_or_name?.message &&
                        <Text style={styles.error} note>
                            {errors.building_number_or_name?.message}
                        </Text>
                    }

                    <Text style={styles.label}>floor_number : </Text>
                    <Item error={!!errors.floor_number?.message}>
                        <Input
                            value={model?.floor_number}
                            onChangeText={(val) => { setValue('floor_number', val) }}
                        />
                    </Item>
                    {
                        !!errors.floor_number?.message &&
                        <Text style={styles.error} note>
                            {errors.floor_number?.message}
                        </Text>
                    }

                    <Text style={styles.label}>apartment_number : </Text>
                    <Item error={!!errors.apartment_number?.message}>
                        <Input
                            value={model?.apartment_number}
                            onChangeText={(val) => { setValue('apartment_number', val) }}
                        />
                    </Item>
                    {
                        !!errors.apartment_number?.message &&
                        <Text style={styles.error} note>
                            {errors.apartment_number?.message}
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



export default EditParamedicAddress;