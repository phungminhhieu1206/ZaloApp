import React, { useContext, useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from 'react-native'
import { GlobalContext } from '../../../../context/Provider';
import Icon from '../../../common/Icon';
import sendMessageAPI from '../../../../context/actions/messages/sendMessageAPI';


const MessageInput = ({
    idChat,
    idFriend,
    setIdChat
}) => {

    const [message, setMessage] = useState('');

    // console.log("Input>>>>>>>>>" + idChat);
    // console.log("Input 1>>>>>>>>>" + idFriend);

    const { ChatsDispatch } = useContext(GlobalContext);  

    const sendMessage = () => {

        // console.warn("sending: ");
        const result = sendMessageAPI({receivedId: idFriend, content: message, chatId: idChat })(ChatsDispatch);
        if(idChat == null) {
            setIdChat(result);
        }
        setMessage('');
    }

    const onPlusClicked = () => {
        console.warn("on plus clicked");

    }

    const onPressHandle = () => {
        if (message) {
            sendMessage();
        } else {
            onPlusClicked();
        }

    }

    return (
        <KeyboardAvoidingView
            style={styles.root}
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            keyboardVerticalOffset={70}
        >
            <View style={styles.inputContainer}>
                <TouchableOpacity>
                    <Icon
                        type="SimpleLineIcons"
                        name="emotsmile"
                        size={24}
                        // style={styles.icon}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="Message..."
                    placeholderTextColor="lightgrey"
                    value={message}
                    onChangeText={(newMessage) => setMessage(newMessage)}
                    style={styles.inputBox}
                />
                <TouchableOpacity>
                    <Icon
                        type="Feather"
                        name="camera"
                        size={24}
                        // style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon
                        type="MaterialCommunityIcons"
                        name="microphone-outline"
                        size={24}
                        // style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <Pressable onPress={onPressHandle} style={styles.buttonContainer}>
                {message ? <Icon type="Ionicons" name="send" size={20} color='white' />
                    : <Icon
                        type="AntDesign"
                        name="plus"
                        size={24}
                        // style={styles.icon}
                    />
                }
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    icon: {
        marginHorizontal: 5,
        color: '#595959'
    },
    inputBox: {
        flex: 1,
        marginHorizontal: 5,
        // borderColor: 'black',
        // borderWidth: 1
    },
    buttonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3777f0'
    }
})

export default MessageInput
