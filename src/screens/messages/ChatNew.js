import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import getContentMess from '../../context/actions/messages/getContentMess';
import { GlobalContext } from '../../context/Provider';
import MessageInput from '../../components/specifics/messages/ChatRoom/MessageInput';
import Message from '../../components/specifics/messages/ChatRoom/Message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';

const ChatDetail = () => {

    const { navigate, setOptions, goBack } = useNavigation();
    const route = useRoute();

    const { id, idFriend, username } = route.params;

    // console.log("id " + id);
    // console.log("id Friend   " + idFriend);
    const [IdUser, setIdUser] = useState('');

    const {
        ChatsDispatch,
        chatsState: {
            getContentMess: { data, loading }
        }
    } = useContext(GlobalContext);

    // const [datachat, setDataChat]

    const getId = async () => {
        let id = await AsyncStorage.getItem('user');
        let test = JSON.parse(id).id;
        console.log("user >>>>>>>>>>>" + test);
        setIdUser(test);
    };

    useEffect(() => {
        // getContentMess(id)(ChatsDispatch);
        getId();
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
                                goBack();
                            }}
                        >
                            <Icon
                                type="Ionicons"
                                name="chevron-back"
                                size={30}
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
                        >
                            <Text
                                style={styles.title}
                            >{username}</Text>
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
                    </View>
                )
            }
        });
    }, []);
    // console.log("IdUser >>>>>>>>>>>>>" + (data));
    return (
        <View style={styles.page} >


            {
                data ? <FlatList
                    data={data}
                    renderItem={
                        ({ item }) => {
                            return (
                                <Message a={item} IdUser={IdUser} />

                            )
                        }

                        //  <Text style={styles.item}>{item.content}</Text>
                    }
                /> : null
            }

            <MessageInput idChat={id} idFriend={idFriend} />
        </View >
    );
}
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8,
    },
    headerTitle: {
        width: '120%',
        fontWeight: "bold",
        fontSize: 20,
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 14,
    },
    title: {
        height: '100%',
        color: colors.white,
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: "bold",
    }
});
export default ChatDetail
