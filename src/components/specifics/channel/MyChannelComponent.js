import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import Icon from "../../common/Icon"

const MyChannelComponent = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.myInfoButton}>
                <Image
                    source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
                    style={styles.avtInfo}
                />
                <View style={{ marginLeft: 20 }}>
                    <Text style={styles.titleInfo}>Phung Minh Hieu</Text>
                    <Text style={styles.subTitleInfo}>View my profile</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon type="MaterialCommunityIcon" name="account-convert-outline" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingRight: 25,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    myInfoButton: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 15,
        paddingLeft: 15
    },
    avtInfo: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    titleInfo: {
        fontSize: 16, color: 'black',
    },
    subTitleInfo: {
        fontSize: 14, color: 'grey'
    }
});

export default MyChannelComponent;

