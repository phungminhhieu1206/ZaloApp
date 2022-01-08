import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import SearchFriendComponent from '../../components/specifics/contacts/SearchFriendComponent'
import getContactByPhone, { clearGetContactByPhoneState } from '../../context/actions/contacts/getContactByPhone';
import addFriendById from '../../context/actions/contacts/addFriendById'
import { GlobalContext } from '../../context/Provider';

const SearchFriend = () => {

    const { navigate, setOptions, goBack } = useNavigation();
    const [phoneSearch, setPhoneSearch] = useState('');

    const {
        contactDispatch,
        contactState: {
            getContactByPhone: { data, loading, error }
        }
    } = useContext(GlobalContext);

    // console.log('data :>>>', data);

    const searchRecent = [
        "0981932985",
        "0989996666",
        "0981932985",
        "0989995555",
        "0989998888",
    ]

    const search = () => {
        if (phoneSearch !== '') {
            getContactByPhone(phoneSearch)(contactDispatch);
        } else {
            console.warn('Please enter phone before !');
        }
    }

    const handleAddFriendById = (value) => {
        console.log('id before go action :>>>>', value);
        addFriendById(value)(contactDispatch);
    }

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
                            onChangeText={(value) => setPhoneSearch(value)}
                            style={styles.textSearch}
                            keyboardType='numeric'
                        />
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            onPress={search}
                        >
                            <Icon
                                type="EvilIcons"
                                name="search"
                                size={34}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, [phoneSearch]);

    useFocusEffect(
        useCallback(() => {
            return () => {
                if (data || error) {
                    clearGetContactByPhoneState()(contactDispatch);
                }
            }
        }, [data, error]),
    );

    return (
        <SearchFriendComponent
            searchRecent={searchRecent}
            data={data}
            loading={loading}
            error={error}
            handleAddFriendById={handleAddFriendById}
        />
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
