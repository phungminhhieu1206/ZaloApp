import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import {
    CHAT_DETAIL,
    CHAT_ROOMS,
    CONTACTS_LIST,
    HOME_POSTS,
    MY_CHANNEL
} from "../constants/routeNames"
import BottomNavigator from "./BottomNavigator";
import ChatDetail from "../screens/messages/ChatDetail"
import Contacts from "../screens/contacts/Contacts";
import HomePosts from "../screens/posts/HomePosts";
import MyChannel from "../screens/channel/MyChannel";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={CHAT_ROOMS}
                component={BottomNavigator}
                options={{
                    headerLeft: null,
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name={CHAT_DETAIL}
                component={ChatDetail}
                options={{
                    // headerTitle: ChatRoomHeader,
                    headerLeft: null,
                }}
            />
            <HomeStack.Screen
                name={CONTACTS_LIST}
                component={Contacts}
                options={{
                    // headerTitle: ContactHeader,
                    headerLeft: null
                }}
            />
            <HomeStack.Screen
                name={HOME_POSTS}
                component={HomePosts}
                options={{
                    // headerTitle: HomeHeader,
                    headerLeft: null
                }}
            />
            <HomeStack.Screen
                name={MY_CHANNEL}
                component={MyChannel}
                options={{
                    // headerTitle: MyChannelHeader,
                    headerLeft: null
                }}
            />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;