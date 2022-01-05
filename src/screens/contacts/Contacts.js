import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import ContactsComponent from "../../components/specifics/contacts/ContactsComponent"
import { GlobalContext } from '../../context/Provider';
import getListContacts from "../../context/actions/contacts/getListContacts"

const Contacts = () => {

    const { navigate, setOptions } = useNavigation();

    const {
        contactDispatch,
        contactState: {
            getListContacts: { data, loading }
        }
    } = useContext(GlobalContext);

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
                        <TouchableOpacity>
                            <Icon
                                type="EvilIcon"
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
                        <TouchableOpacity>
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
                            onPress={() => { console.warn('add new contact'); }}
                        >
                            <Icon
                                type="MaterialIcon"
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
