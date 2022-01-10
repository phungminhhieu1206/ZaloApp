import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import getContentMess from '../../context/actions/messages/getContentMess';
import { GlobalContext } from '../../context/Provider';
import MessageInput from '../../components/specifics/messages/ChatRoom/MessageInput';
import Message from '../../components/specifics/messages/ChatRoom/Message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatDetail = () => {

    const { navigate } = useNavigation();
    const route = useRoute();

    const {id, idFriend } = route.params;
    // const idChat = route.params?.id;

    // const idFriend = route.params?.idFriend;

    console.log("id " + id);
    console.log("id Friend   " + idFriend);
    const [IdUser, setIdUser] = useState('');

    const {
        ChatsDispatch,
        chatsState: {
            getContentMess: { data, loading }
        }
    } = useContext(GlobalContext);
    const getId = async () => {
        let id = await AsyncStorage.getItem('user');
        let test = {id}.id;
        // console.log({test}.id);
        setIdUser(test);
    };

    useEffect(() => {
        getContentMess(id)(ChatsDispatch);
        getId();
    }, []);
    // console.log("IdUser >>>>>>>>>>>>>" + (data));
    return (
        <View style={styles.page} >
            <Text>123</Text>

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

            <MessageInput idChat={id} idFriend={idFriend} />
        </View >
    );
}
const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
});
export default ChatDetail
