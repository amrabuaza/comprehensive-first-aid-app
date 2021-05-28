import React, { useEffect, useState, useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { Text, View, Button } from 'native-base';
import { Loader } from '../../components';
import { ParamedicAddress as ParamedicAddressModel } from "../../api/models";
import { getParamedicAddress } from "../../api";
import User from "../../context/user";

// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};

/**
 * Paramedic Address screen
 * 
 * @param {Props} navigation 
 * @returns 
 */
function ParamedicAddress({ navigation }: Props) {
    const [bodyLoading, setBodyloading] = useState(false);
    const [adress, setAddress] = useState<ParamedicAddressModel>();
    const { setUserAddress }: any = useContext(User.Context);

    useEffect(() => {
        setBodyloading(true);
        getParamedicAddress().then((response) => {
            if (response.kind == "OK") {
                setAddress(response.address as ParamedicAddressModel);
                setUserAddress(response.address as ParamedicAddressModel);
            }
            setBodyloading(false);
        })
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            <View>
                <Text style={styles.title}>
                    Paramedic Address
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Country :
                    </Text>
                    <Text style={styles.infoItemLabel}>
                        {adress?.country}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        City :
                </Text>
                    <Text style={styles.infoItemLabel}>
                        {adress?.city}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Region :  </Text>
                    <Text style={styles.infoItemLabel}>
                        {adress?.region}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Street name :
                </Text>
                    <Text style={styles.infoItemLabel}>
                        {adress?.streetName}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Building number or name :
                    </Text>
                    <Text style={styles.infoItemLabel}>
                        {adress?.buildingNumberOrName}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Floor number :
                    </Text>
                    <Text style={styles.infoItemLabel}>
                        {adress?.floorNumber}
                    </Text>
                </Text>
                <Text style={styles.infoItem}>
                    <Text style={styles.label}>
                        Apartment number :
                    </Text>
                    <Text style={styles.infoItemLabel}>
                        {adress?.apartmentNumber}
                    </Text>
                </Text>
                <View style={styles.buttonGroup}>
                    <Button
                        onPress={() => navigation.navigate("EditParamedicAddress")}
                        style={styles.btn}
                        hasText
                        transparent
                    >
                        <Text style={styles.btnText}>Update</Text>
                    </Button>
                </View>
            </View>
            {bodyLoading && <Loader />}
        </SafeAreaView>
    );
};

export default ParamedicAddress;