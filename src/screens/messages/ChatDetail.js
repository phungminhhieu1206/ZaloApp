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
import {GET_CONTENT_MESS_SUCCESS} from '../../constants/actionTypes';

const ChatDetail = () => {

    const { navigate, setOptions, goBack } = useNavigation();
    const route = useRoute();

    const {id, idFriend, username } = route.params;

    // console.log("id " + id);
    // console.log("id Friend   " + idFriend);
    const [IdUser, setIdUser] = useState('');
    const [idChat, setIdChat] = useState(id);

    const {
        ChatsDispatch,
        chatsState: {
            getContentMess: { data, loading }
        }
    } = useContext(GlobalContext);
    const getId = async () => {
        let id = await AsyncStorage.getItem('user');
        let test = JSON.parse(id).id;
       
        setIdUser(test);
    };

    useEffect(() => {
        //check user có nằm trong list cuộc thoại ko, có thì get dữ liệu, ko thì gán bằng null
        if(idChat){
            getContentMess(id)(ChatsDispatch);
        }
        
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
                                ChatsDispatch({
                                    type: GET_CONTENT_MESS_SUCCESS,
                                    payload: []
                                }); 
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
                                type="SimpleLineIcon"
                                name="phone"
                                size={22}
                                color={colors.white}
                                style={{
                                    marginRight: 20
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.warn('clicked qrcode of chat room')}>
                            <Icon
                                type="Feather"
                                name="video"
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
    console.log("IDchat >>>>>>>>>>>"+ idChat);
    return (
        <View style={styles.page} >
            {/* <Text>123</Text> */}

            <FlatList
                data={data}
                renderItem= {
                    ({ item }) => {
                      return (
                            <Message a={item} IdUser={IdUser} /> 
                            
                      )
                  }
                
                //  <Text style={styles.item}>{item.content}</Text>
                }
            />

            <MessageInput idChat={idChat} idFriend={idFriend} setIdChat={setIdChat} />
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
