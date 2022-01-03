import React, { useContext, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import AuthNavigator from "./AuthNavigator"
import HomeNavigator from "./HomeNavigator"
import { GlobalContext } from "../context/Provider";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'
import { ActivityIndicator } from 'react-native'
import { navigationRef } from './RootNavigator'


const AppNavContainer = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(true);
    const [authLoaded, setAuthLoaded] = React.useState(true);

    return (
        <>
            {authLoaded ? (
                <NavigationContainer ref={navigationRef}>
                    {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
                </NavigationContainer>
            ) : (
                <ActivityIndicator />
            )}
        </>
    );
};

export default AppNavContainer;