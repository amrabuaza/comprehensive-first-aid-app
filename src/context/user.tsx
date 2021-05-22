import React, { useCallback, useState, createContext, useEffect } from 'react';
import { StorageHelper } from "../utils/storage";

const Context = createContext();
const guest = { isGuestUser: true, name: "Guest" };

/**
 * 
 * @param children 
 * @returns 
 */
function Provider({ children }: any) {
    const [user, setUser] = useState(guest);
    const [userInfo, setUserInfo] = useState([]);
    const [userType, setUserType] = useState("user");
    const [isParamedic, setIsParamedic] = useState<boolean>(false);

    useEffect(() => {
        StorageHelper.get("@USER").then((response) => {
            if (!response || response.isGuestUser) setUser(guest);
            setUser(response);
        })
    }, [])

    useEffect(() => {
        StorageHelper.get("@USER_INFO").then((response) => {
            if (!response || user.isGuestUser) setUserInfo([]);
            setUserInfo(response);
        })
    }, [])

    useEffect(() => {
        setIsParamedic(!user.isGuestUser && userType === "paramedic");
    }, [userType])

    /**
     * Handle user login
     */
    const handleLogin = useCallback((userInfo) => {
        StorageHelper.save("@USER", userInfo);
        setUserType(userInfo.userType);
    }, []);

    const handleSetUserInfo = useCallback((userInfo) => {
        StorageHelper.save("@USER_INFO", userInfo);
        setUserInfo(userInfo);
    }, []);

    /**
     * Handle user logout
     */
    const handleLogout = useCallback(() => {
        setUser(guest);
        StorageHelper.clearAll();
    }, []);

    return (
        <Context.Provider
            value={{
                user,
                userInfo,
                isParamedic,
                handleSetUserInfo,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export default {
    Context,
    Provider,
    Consumer: Context.Consumer,
};