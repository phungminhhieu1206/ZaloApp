import { useNavigation } from '@react-navigation/native'
import React, { useContext, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator
} from 'react-native'
import colors from '../../../assets/themes/colors'
import setAcceptRequest from '../../../context/actions/contacts/setAcceptRequest'
import Icon from '../../common/Icon'
import Message from "../../common/Message"

const FriendRequestsComponent = ({
    data,
    loading,
    contactDispatch
}) => {

    const ListEmptyComponent = () => {
        return (
            <View style={{
                padding: 100
            }}>
                <Message info message="Not friend requests !!!" />
            </View>
        )
    }

    const renderItem = ({ item }) => {

        const {
            blocked_inbox,
            blocked_diary,
            _id,
            phonenumber,
            username,
            avatar,
            cover_image,
            createdAt,
            updatedAt
        } = item;



        return (
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.itemContainer}>
                    <View style={styles.item}>
                        {avatar ?
                            <Image
                                style={styles.imageAvt}
                                source={{ uri: avatar }}
                            /> :
                            <View
                                style={styles.imageNotAvt}
                            >
                                <Text numberOfLines={1} style={[styles.nameImage, { color: colors.white }]}>{username}</Text>
                            </View>
                        }


                        <View style={{ paddingLeft: 20 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.name, { color: colors.text }]}>{username}</Text>
                            </View>
                            <Text
                                style={styles.phoneNumber}
                            >{"Phone number: " + phonenumber}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    marginLeft: 80,
                }}>
                    <TouchableOpacity
                        style={[
                            styles.buttonAction,
                            { backgroundColor: colors.theme }
                        ]}
                        onPress={() => {
                            if (_id) {
                                setAcceptRequest(_id)(contactDispatch);
                            }

                        }}
                    >
                        <Text style={{
                            color: 'white'
                        }}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.buttonAction, { marginLeft: 20, backgroundColor: colors.grey }]}>
                        <Text style={{
                            color: 'white'
                        }}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        /**
         * Dùng FlatList hoặc ScrollView bắt buộc phải flex: 1 ở thẻ ngoài cùng
         */
        <View style={{ flex: 1 }}>
            <View style={{
                backgroundColor: colors.white,
                minHeight: 700
            }}>

                {loading &&
                    <View style={{ padding: 100 }}>
                        <ActivityIndicator color={colors.theme} size="large" />
                    </View>
                }

                {!loading &&
                    <View style={{ paddingTop: 10, paddingBottom: 65 }}>
                        <FlatList
                            data={data}
                            ListEmptyComponent={ListEmptyComponent}
                            ListFooterComponent={<View style={{ height: 100 }}></View>}
                            renderItem={renderItem}
                            keyExtractor={(item) => String(item._id)}
                        />
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
        paddingBottom: 10
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingRight: 20,
        alignItems: 'center',
        marginLeft: 15
    },
    nameImage: {
        fontSize: 17,
        paddingHorizontal: 2
    },
    name: {
        fontSize: 17,
    },
    phoneNumber: {
        opacity: 0.7,
        fontSize: 14,
        paddingVertical: 5,
    },
    floatingActionButton: {
        backgroundColor: 'red',
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 35,
        right: 15,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageAvt: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
    imageNotAvt: {
        width: 50,
        height: 50,
        backgroundColor: colors.grey,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonAction: {
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 3
    }
})

export default FriendRequestsComponent
