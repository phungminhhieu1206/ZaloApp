import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../assets/themes/colors'
import Icon from '../../components/common/Icon';
import ChatRoomsComponent from '../../components/specifics/messages/ChatRoomsComponent';
import { SEARCH_FRIEND } from '../../constants/routeNames';
import getListUserChats from '../../context/actions/messages/getListUserChats';
import { GlobalContext } from '../../context/Provider';

const ChatRooms = () => {

    const { navigate, setOptions } = useNavigation();
    const [refreshList, setRefreshList] = useState(false);

    const {
        ChatsDispatch,
        chatsState: {
            getListUserChats: { data, loading }
        }
    } = useContext(GlobalContext);

    const onRefresh = () => {
        setRefreshList(true);
        getListUserChats()(ChatsDispatch);
        setRefreshList(false)
    }

    useEffect(() => {
        const result = getListUserChats()(ChatsDispatch);
        console.log("Tessssssss" + result);
    }, [data]);

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
                        <TouchableOpacity onPress={() => console.warn('clicked qrcode of chat room')}>
                            <Icon
                                type="MaterialCommunityIcons"
                                name="qrcode-scan"
                                size={22}
                                color={colors.white}
                                style={{
                                    marginRight: 20
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
                        >
                            <Icon
                                type="AntDesign"
                                name="plus"
                                size={25}
                                color={colors.white}
                                style={{
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);
    // console.log()
    return (
        // <View>
        //     <Text>test</Text>
        // </View>
        <ChatRoomsComponent
        data={data}
        loading={loading}
        onRefresh={onRefresh}
        refreshList={refreshList}
        />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8,
    },
    headerTitle: {
        width: '120%',
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

export default ChatRooms
