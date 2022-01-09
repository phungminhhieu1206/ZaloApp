import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MyChannelComponent from '../../components/specifics/channel/MyChannelComponent';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../components/common/Icon';
import colors from "../../assets/themes/colors"
import { SEARCH_FRIEND, SETTINGS } from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyChannel = () => {
    const { navigate, setOptions } = useNavigation();
    const [user, setUser] = useState({});
    

    const getUser = async () => {
        try {
            const author = await AsyncStorage.getItem('user');
            console.log('user ----> ', JSON.parse(author).username);
            setUser(JSON.parse(author));
        } catch (error) { }
    };

    console.log("user isssssssssssssss:>>", user.username);

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        setOptions({
            // title: item.first_name + ' ' + item.last_name,
            headerStyle: {
                backgroundColor: colors.theme
            },
            headerLeft: () => {
                return (
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
                        >
                            <Icon
                                type="EvilIcons"
                                name="search"
                                size={34}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )
            },
            headerTitle: () => {
                return (
                    <View style={styles.headerTitle}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
                        >
                            <Text
                                style={styles.title}
                            >Search friends, messages...</Text>
                        </TouchableOpacity>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SETTINGS);
                            }}
                        >
                            <Icon
                                type="AntDesign"
                                name="setting"
                                size={24}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);

    return (
        <MyChannelComponent 
            user={user}
        />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8
    },
    headerTitle: {
        width: '140%'
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 14,
    },
    title: {
        height: '100%',
        color: colors.white,
        textAlignVertical: 'center',
        fontSize: 16,
    }
})

export default MyChannel;
