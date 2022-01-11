import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity
} from 'react-native'
import Icon from '../../../common/Icon';

const CommentInput = ({
    onChangeText,
    content,
    onCreateComment
}) => {

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
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder="Write a comment"
                    placeholderTextColor="lightgrey"
                    value={content}
                    style={styles.inputBox}
                    autoFocus={true}
                    onChangeText={(value) => onChangeText(value)}
                />
                <TouchableOpacity>
                    <Icon
                        type="Feather"
                        name="camera"
                        size={24}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <Pressable onPress={onCreateComment} style={styles.buttonContainer}>
                {content ?
                    <Icon
                        type="Ionicons"
                        name="send"
                        size={20}
                        color='white'
                    />
                    :
                    <Icon
                        type="AntDesign"
                        name="plus"
                        size={30}
                        color='white'
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
        backgroundColor: 'white'
    },
    inputContainer: {
        // backgroundColor: '#f2f2f2',
        flex: 1,
        marginRight: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5
    },
    icon: {
        marginHorizontal: 7,
        color: '#595959'
    },
    inputBox: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: 'white'
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

export default CommentInput
