import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import {
    CHAT_DETAIL,
    CHAT_ROOMS,
    COMMENT,
    CONTACTS_LIST,
    CREATE_POST,
    FRIEND_REQUESTS,
    HOME_POSTS,
    LOGOUT,
    MY_CHANNEL,
    SETTINGS
} from "../constants/routeNames"
import BottomNavigator from "./BottomNavigator";
import ChatDetail from "../screens/messages/ChatDetail"
import Contacts from "../screens/contacts/Contacts";
import HomePosts from "../screens/posts/HomePosts";
import MyChannel from "../screens/channel/MyChannel";
import Settings from "../screens/channel/Settings";
import FriendRequests from "../screens/contacts/FriendRequests";
import CreatePost from "../screens/posts/CreatePost";
import Comment from "../screens/posts/Comment";
import Logout from "../screens/auth/Logout";

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <HomeStack.Navigator initialRouteName={CHAT_ROOMS}>
            <HomeStack.Screen
                name={CHAT_ROOMS}
                component={BottomNavigator}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name={CHAT_DETAIL}
                component={ChatDetail}
            />
            <HomeStack.Screen
                name={CONTACTS_LIST}
                component={Contacts}
            />
            <HomeStack.Screen
                name={HOME_POSTS}
                component={HomePosts}
            />
            <HomeStack.Screen
                name={MY_CHANNEL}
                component={MyChannel}
            />
            <HomeStack.Screen
                name={SETTINGS}
                component={Settings}
            />
            <HomeStack.Screen
                name={FRIEND_REQUESTS}
                component={FriendRequests}
            />
            <HomeStack.Screen
                name={CREATE_POST}
                component={CreatePost}
            />
            <HomeStack.Screen
                name={COMMENT}
                component={Comment}
            />
            <HomeStack.Screen
                name={LOGOUT}
                component={Logout}
            />

        </HomeStack.Navigator>
    )
}

export default HomeNavigator;