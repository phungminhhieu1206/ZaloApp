import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import FriendRequestsComponent from '../../components/specifics/contacts/FriendRequestsComponent';
import { GlobalContext } from '../../context/Provider';
import getFriendRequests from "../../context/actions/contacts/getFriendRequests"
import { CONTACTS } from '../../constants/routeNames';

const FriendRequests = () => {
    const { navigate, setOptions, goBack } = useNavigation();

    const {
        contactDispatch,
        contactState: {
            getFriendRequests: { data, loading }
        },

    } = useContext(GlobalContext);

    useEffect(() => {
        getFriendRequests()(contactDispatch);
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
                        <TouchableOpacity onPress={() => {
                            goBack();
                        }}>
                            <Icon
                                type="Ionicon"
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
                        <Text
                            style={styles.title}
                        >Friend Requests</Text>
                    </View>
                )
            },
            headerRight: () => {
                return (
                    <View style={styles.headerRight}>
                        <TouchableOpacity>
                            <Icon
                                type="AntDesign"
                                name="setting"
                                size={24}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        });
    }, []);

    return (
        <FriendRequestsComponent
            data={data}
            loading={loading}
            contactDispatch={contactDispatch}
        />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8
    },
    headerTitle: {
        width: '210%',
    },
    headerRight: {
        flexDirection: 'row',
        paddingRight: 14,
    },
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        color: colors.white,
        height: '100%'
    }
})

export default FriendRequests
