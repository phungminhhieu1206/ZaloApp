import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../components/common/Icon';
import colors from "../../assets/themes/colors"
import { SEARCH_FRIEND, SETTINGS } from '../../constants/routeNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyChannelComponent from '../../components/specifics/channel/MyChannelComponent';
import { USERS } from "../../assets/sample_data/Users";
import { GlobalContext } from '../../context/Provider';
import getMyPosts from '../../context/actions/posts/getMyPosts';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const MyChannel = () => {
    const { navigate, setOptions } = useNavigation();
    const [refreshList, setRefreshList] = useState(false);
    const [user, setUser] = useState({});

    const {
        postsDispatch,
        postsState: {
            getMyPosts: { data, loading }
        }
    } = useContext(GlobalContext);

    const getUser = async () => {
        try {
            const author = await AsyncStorage.getItem('user');
            // console.log('IDDDDDDDDDDDDDDDDDDDD ----> ', JSON.parse(author).id);
            setUser(JSON.parse(author));
        } catch (error) { }
    };

    // console.log("user isssssssssssssss:>>", user.username);



    const onRefresh = async () => {
        setRefreshList(true);
        getUser();
        getMyPosts(user.id)(postsDispatch);
        setRefreshList(false);
    }

    useEffect(() => {
        getUser();
        getMyPosts(user.id)(postsDispatch);
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
            widthScreen={WIDTH}
            friends={USERS}
            data={data}
            loading={loading}
            refreshList={refreshList}
            onRefresh={onRefresh}
            navigate={navigate}
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
