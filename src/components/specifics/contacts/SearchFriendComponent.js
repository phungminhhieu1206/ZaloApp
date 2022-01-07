import React from 'react'
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import colors from '../../../assets/themes/colors'
import { USERS } from '../../../assets/sample_data/Users'
import { useNavigation } from '@react-navigation/native'
import { CHAT_DETAIL } from '../../../constants/routeNames'
import Icon from '../../common/Icon'

const SearchFriendComponent = ({
    searchRecent
}) => {

    const { navigate } = useNavigation();

    const onPressHandle = (index) => {
        // console.warn('pressed on: ', index);

        // navigate(CHAT_DETAIL, { id: '2' });
        // console.warn(chatRoom.id);
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.slideWrapper}>
                <Text>Recent search</Text>
                <TouchableOpacity>
                    <Text style={{ color: colors.theme }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.slideShow}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {USERS.map((story, index) => (
                        <TouchableOpacity
                            onPress={onPressHandle(index)}
                            key={index}
                            style={{ alignItems: 'center' }}
                        >
                            < Image
                                source={{ uri: story.image }}
                                style={styles.imageSlide}
                            />
                            <Text
                                numberOfLines={2}
                                style={styles.textSlide}
                            >{story.user}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {true ?
                <View style={styles.wrapper}>
                    <TouchableOpacity style={styles.itemContainer}>
                        <View style={styles.item}>
                            {false ?
                                <Image
                                    style={styles.imageAvt}
                                    source={{ uri: avatar }}
                                /> :
                                <View
                                    style={styles.imageNotAvt}
                                >
                                    <Text numberOfLines={1} style={[styles.nameImage, { color: colors.white }]}>phunghieu12</Text>
                                </View>
                            }
                            
                            <View style={{ paddingLeft: 20 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.name, { color: colors.text }]}>phunghieu12</Text>
                                </View>
                                <Text
                                    style={styles.phoneNumber}
                                >Phone number: 0981932984</Text>
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
                                console.warn('click add friend button');
                            }}
                        >
                            <Text style={{
                                color: 'white'
                            }}>Add friend</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <ScrollView>
                    {searchRecent.map((phone, index) => (
                        <TouchableOpacity key={index} style={styles.touchPhoneRecent}>
                            <Icon
                                type="EvilIcons"
                                name="search"
                                size={24}
                                color="black"
                                style={{ marginRight: 15 }}
                            />
                            <Text>{phone}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    slideWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 17,
        paddingTop: 5,
        paddingBottom: 10
    },
    slideShow: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    imageSlide: {
        width: 54,
        height: 54,
        borderRadius: 27,
        marginHorizontal: 17,
        marginVertical: 7
    },
    textSlide: {
        color: 'black',
        maxWidth: 75,
        height: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 14,
    },
    touchPhoneRecent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },



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

export default SearchFriendComponent
