import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import MyChannelComponent from '../../components/specifics/channel/MyChannelComponent';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../components/common/Icon';
import colors from "../../assets/themes/colors"
import { SETTINGS } from '../../constants/routeNames';

const MyChannel = () => {
    const { navigate, setOptions } = useNavigation();

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
                        onPress={() => {
                            navigate(SETTINGS);
                        }}
                        >
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
        <MyChannelComponent />
    )
}

const styles = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row', 
        paddingLeft: 8
    },
    headerTitle: {
        width: '140%'
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

export default MyChannel;
