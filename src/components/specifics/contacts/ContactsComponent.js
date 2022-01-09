import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    ActivityIndicator,
    RefreshControl
} from 'react-native'
import colors from '../../../assets/themes/colors'
import { FRIEND_REQUESTS } from '../../../constants/routeNames'
import Icon from '../../common/Icon'
import Message from "../../common/Message"

const ContactsComponent = ({
    data,
    loading,
    refreshList,
    onRefresh
}) => {

    const { navigate } = useNavigation();

    const ListEmptyComponent = () => {
        return (
            <View style={{
                padding: 100
            }}>
                <Message info message="No contacts to show here !" />
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
                        >{"Phone: " + phonenumber}</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity>
                        <Icon
                            type="SimpleLineIcon"
                            name="phone"
                            size={16}
                            color={colors.text}
                            style={{
                                marginRight: 25
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon
                            type="Feather"
                            name="video"
                            size={18}
                            color={colors.text}
                            style={{
                            }}
                        />
                    </TouchableOpacity>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        /**
         * Dùng FlatList hoặc ScrollView bắt buộc phải flex: 1 ở thẻ ngoài cùng
         */
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: colors.white }}>
                <TouchableOpacity style={styles.touch} onPress={() => {
                    navigate(FRIEND_REQUESTS);
                }}>
                    <View style={[styles.itemChoose, { backgroundColor: colors.theme }]}>
                        <Icon
                            type="Ionicons"
                            name="md-people"
                            size={20}
                            color={colors.white}
                        />
                    </View>
                    <Text style={styles.text}>Friend request</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touch}>
                    <View style={[styles.itemChoose, { backgroundColor: colors.success }]}>
                        <Icon
                            type="FontAwesome"
                            name="phone-square"
                            size={20}
                            color={colors.white}
                        />
                    </View>
                    <Text style={styles.text}>Phonebook friends</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                marginTop: 10,
                backgroundColor: colors.white,
                minHeight: 600
            }}>
                <Text style={styles.textListFriend}>List friends</Text>

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
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshList}
                                    onRefresh={onRefresh}
                                    colors={['red']}
                                />
                             }
                        />
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 55
    },
    text: {
        fontSize: 18,
        color: 'black',
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey',
        height: '100%',
        textAlignVertical: 'center'
    },
    itemChoose: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },



    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'lightgrey'
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
    textListFriend: {
        color: colors.text,
        fontSize: 16,
        paddingTop: 5,
        marginLeft: 20
    },
    imageAvt: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    imageNotAvt: {
        width: 40,
        height: 40,
        backgroundColor: colors.grey,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default ContactsComponent
