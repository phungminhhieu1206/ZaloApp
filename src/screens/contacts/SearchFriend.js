import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import SearchFriendComponent from '../../components/specifics/contacts/SearchFriendComponent'

const SearchFriend = () => {

    const { navigate, setOptions, goBack } = useNavigation();

    const searchRecent = [
        "0981932985",
        "0989996666",
        "0981932985",
        "0989995555",
        "0989998888",
    ]

    useEffect(() => {
        setOptions({
            // title: item.first_name + ' ' + item.last_name,
            headerStyle: {
                backgroundColor: colors.theme
            },
            headerLeft: () => {
                return (
                    <View style={styles.headerLeft}>
                        <TouchableOpacity onPress={() => {
                            goBack();
                        }}>
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
                        <TextInput
                            placeholder="Search friends by phone ..."
                            placeholderTextColor="grey"
                            autoFocus={true}
                            onChangeText={(newMessage) => console.warn("enter: ", newMessage)}
                            style={styles.textSearch}
                            keyboardType='numeric'
                        />
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={() => console.warn('clicked qrcode of chat room')}>
                            <Icon
                                type="MaterialCommunityIcons"
                                name="qrcode-scan"
                                size={22}
                                color={colors.white}
                                style={{ marginRight: 5 }}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);


    return (
        <SearchFriendComponent searchRecent={searchRecent}/>
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8,
    },
    headerTitle: {
        width: '140%',
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 14,
    },
    title: {
        height: '100%',
        color: colors.white,
        textAlignVertical: 'center',
        fontSize: 16,
    },
    textSearch: {
        marginRight: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 0,
        height: 30,
        width: 275
    }
})

export default SearchFriend
