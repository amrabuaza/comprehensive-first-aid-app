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
import * as Location from 'expo-location';
import { ParamedicAddress as ParamedicAddressModel } from "../../api/models";
import { getParamedicAddress, updateParamedicAddress } from "../../api";
import User from "../../context/user";

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};
interface FormData {
    country: string;
    city: string;
    region: string;
    street_name: string;
    building_number_or_name: string;
    floor_number: string;
    apartment_number: string;
    longitude: number;
    latitude: number;
};

function EditParamedicAddress({ navigation }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);
    const { userAddress }: any = useContext(User.Context);
    const [adress, setAddress] = useState<ParamedicAddressModel>(userAddress);

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
        street_name: Yup.string()
            .required('Apartment number is required'),
    });

    // use react hook form.
    const {
        setValue,
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm<FormData>({
        resolver: yupResolver(validation),
        defaultValues: {
            country: adress?.country || '',
            city: adress?.city || '',
            region: adress?.region || '',
            street_name: adress?.streetName || '',
            building_number_or_name: adress?.buildingNumberOrName || '',
            floor_number: adress?.floorNumber || '',
            apartment_number: adress?.apartmentNumber || '',
        }
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
            register('street_name');
        },
        []
    );

    /**
     * Handle submit the form result.
     */
    const onSubmit = (payload: FormData) => {
        payload.latitude = 30.5852;
        payload.longitude = 36.2384;
        setBodyloading(true);
        updateParamedicAddress(payload).then((response) => {
            if (response.kind !== 'OK') {
                setBodyloading(false);
                return;
            }
            navigation.navigate("ParamedicAddress");
        });
        // Location.getCurrentPositionAsync().then((response) => {

        // })
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.inputsContainer}>
                    <Text style={styles.label}>Country : </Text>
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

                    <Text style={styles.label}>City : </Text>
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

                    <Text style={styles.label}>Region : </Text>
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

                    <Text style={styles.label}>street name : </Text>
                    <Item error={!!errors.street_name?.message}>
                        <Input
                            value={model?.street_name}
                            onChangeText={(val) => { setValue('street_name', val) }}
                        />
                    </Item>
                    {
                        !!errors.street_name?.message &&
                        <Text style={styles.error} note>
                            {errors.street_name?.message}
                        </Text>
                    }

                    <Text style={styles.label}>Building number or name : </Text>
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

                    <Text style={styles.label}>Floor number : </Text>
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

                    <Text style={styles.label}>Apartment number : </Text>
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