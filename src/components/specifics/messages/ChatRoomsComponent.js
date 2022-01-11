import React, { useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView,
    Image,
    RefreshControl
} from 'react-native';
import ListImages from '../../common/ListImages';
import ChatRoomItem from './ListMessage/ChatRoomItem';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ChatRoomsComponent = ({
    data,
    loading,
    onRefresh,
    refreshList
}) => {


    return (
        <View style={styles.home_chat}>
            {/* <Text>123</Text> */}
            <FlatList
                data={data}
                renderItem={({ item, index }) => <ChatRoomItem chatRoom={item} key={index} />}
                showsVerticalScrollIndicator={true}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshList}
                        onRefresh={onRefresh}
                        colors={['red']}
                    />
                }
            />
        </View >
    );
}

const styles = StyleSheet.create({
    home_chat: {
        backgroundColor: 'white',
        flex: 1,
    }
});
export default ChatRoomsComponent
