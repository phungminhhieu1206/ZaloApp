import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import ContactsComponent from "../../components/specifics/contacts/ContactsComponent"
import { GlobalContext } from '../../context/Provider';
import getListContacts from "../../context/actions/contacts/getListContacts"
import { SEARCH_FRIEND } from '../../constants/routeNames';

const Contacts = () => {

    const { navigate, setOptions } = useNavigation();
    const [refreshList, setRefreshList] = useState(false);

    const {
        contactDispatch,
        contactState: {
            getListContacts: { data, loading }
        }
    } = useContext(GlobalContext);

    const onRefresh = () => {
        setRefreshList(true);
        getListContacts()(contactDispatch);
        setRefreshList(false)
    }

    useEffect(() => {
        getListContacts()(contactDispatch);
    }, []);

    useEffect(() => {
        setOptions({
            // title: item.first_name + ' ' + item.last_name,
            headerStyle: {
                backgroundColor: colors.theme
            },
            headerLeft: () => {
                return (
                    <View style={styles.headerLeft}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
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
            },
            headerTitle: () => {
                return (
                    <View style={styles.headerTitle}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
                        >
                            <Text
                                style={styles.title}
                            >Search friends, messages...</Text>
                        </TouchableOpacity>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity
                            onPress={() => {
                                navigate(SEARCH_FRIEND);
                            }}
                        >
                            <Icon
                                type="MaterialIcons"
                                name="person-add-alt"
                                size={26}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);

    return (
        <ContactsComponent
            data={data}
            loading={loading}
            refreshList={refreshList}
            onRefresh={onRefresh}
        />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8
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
    }
})

export default Contacts
