import * as React from 'react';
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native'

import { GlobalContext } from '../../../../context/Provider';



export default function Message({ a, IdUser }) {

    let myId = JSON.parse(IdUser).id;
    let idUser = a.user._id;
    const isMe = myId === idUser;
    console.log("ktraaaaaaa" + isMe);
  
    return (
        <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
            <Text style={{ color: isMe ? 'black' : 'white' }}>{a.content}</Text>
        </View> 
    )    
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%'
    },
    leftContainer: {
        backgroundColor: '#3777f0',
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: 'lightgrey',
        marginLeft: 'auto',
        marginRight: 10
    }
})