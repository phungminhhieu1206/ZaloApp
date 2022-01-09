import React, { useContext, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator"
import HomeNavigator from "./HomeNavigator"
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'
import { ActivityIndicator, View } from 'react-native'
import { navigationRef } from './RootNavigator'
import { GlobalContext } from "../context/Provider";
import colors from "../assets/themes/colors";


const AppNavContainer = () => {
    const {
        authState: { isLoggedIn },
    } = useContext(GlobalContext); // in the first set up, isLoggedIn = true

    const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
    const [authLoaded, setAuthLoaded] = React.useState(false);

    const getUser = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            if (user) {
                setAuthLoaded(true);
                setIsAuthenticated(true);
            } else {
                setAuthLoaded(true);
                setIsAuthenticated(false);
            }
        } catch (error) { }
    };

    useEffect(() => {
        getUser();
    }, [isLoggedIn, authLoaded]);

    return (
        <>
            {authLoaded ? (
                <NavigationContainer ref={navigationRef}>
                    {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            ) : (
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                    <ActivityIndicator color={colors.primary} size={70} />
                </View>

            )}
        </>
    );
};

export default AppNavContainer;