import React, { useContext, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import User from "../../context/user";
import { SafeAreaView } from "react-native-safe-area-context";
import { Loader } from "../../components";


// type checking.
interface Props {
    navigation: StackNavigationProp<any>;
};

/**
 * Logout user
 * 
 * @param navigation 
 */
function Logout({ navigation }: Props) {
    const { handleLogout }: any = useContext(User.Context);

    useEffect(() => {
        handleLogout();
        navigation.navigate("Login");
    }, [])

    return (
        <SafeAreaView >
            {true && <Loader />}
        </SafeAreaView>
    )
}

export default Logout;