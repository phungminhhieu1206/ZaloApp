import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatRooms from "../screens/messages/ChatRooms"
import Contacts from "../screens/contacts/Contacts"
import HomePosts from "../screens/posts/HomePosts"
import MyChannel from "../screens/channel/MyChannel"

import Icon from "../components/common/Icon"
import {
    CONTACTS,
    ME,
    MESSAGES,
    TAB_FOUR,
    TAB_ONE,
    TAB_THREE,
    TAB_TWO,
    TIMELINE
} from '../constants/routeNames';

const TabOneStack = createStackNavigator();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator screenOptions={{ headerShown: true }}>
            <TabOneStack.Screen
                name={TAB_ONE}
                component={ChatRooms}
            // options={{ headerTitle: ChatHomeHeader }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator screenOptions={{ headerShown: true }}>
            <TabTwoStack.Screen
                name={TAB_TWO}
                component={Contacts}
            // options={{ headerTitle: ContactHeader }}
            />
        </TabTwoStack.Navigator>
    );
}

const TabThreeStack = createStackNavigator();

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator screenOptions={{ headerShown: true }}>
            <TabThreeStack.Screen
                name={TAB_THREE}
                component={HomePosts}
            // options={{ headerTitle: HomeHeader }}
            />
        </TabThreeStack.Navigator>
    );
}

const TabFourStack = createStackNavigator();

function TabFourNavigator() {
    return (
        <TabFourStack.Navigator screenOptions={{ headerShown: true }}>
            <TabFourStack.Screen
                name={TAB_FOUR}
                component={MyChannel}
            // options={{ headerTitle: MeHeader }}
            />
        </TabFourStack.Navigator>
    );
}

const BottomTabNavigator = createBottomTabNavigator();

const BottomNavigator = () => {

    return (
        <BottomTabNavigator.Navigator
            // initialRouteName="ChatHome"
            screenOptions={{
                headerShown: false
            }}
        >
            <BottomTabNavigator.Screen
                name={MESSAGES}
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            type="materialCommunity"
                            size={30}
                            name="chat-processing"
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name={CONTACTS}
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            type="material"
                            size={30}
                            name="contact-page"
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name={TIMELINE}
                component={TabThreeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            type="materialCommunity"
                            size={30}
                            name="clock-time-eight"
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTabNavigator.Screen
                name={ME}
                component={TabFourNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            type="ionicon"
                            size={30}
                            name="person"
                            style={{ marginBottom: -3 }}
                            color={color}
                        />
                    )
                }}
            />
        </BottomTabNavigator.Navigator>
    );
}

export default BottomNavigator;