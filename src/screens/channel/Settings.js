import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/themes/colors';
import Icon from '../../components/common/Icon';
import SettingsComponent from "../../components/specifics/channel/SettingsComponent"

const Settings = () => {
    const { navigate, setOptions, goBack } = useNavigation();

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
                        >Settings</Text>
                    </View>
                )
            }
        });
    }, []);

    return (
        <SettingsComponent />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        paddingLeft: 8
    },
    headerTitle: {
        width: '420%',
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

export default Settings
